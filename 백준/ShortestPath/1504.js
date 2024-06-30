const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(v => v.split(' ').map(v => +v));

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size() {
    return this.heap.length - 1;
  }

  empty() {
    return this.size() === 0;
  }

  push(value) {
    this.heap.push(value);
    let cur = this.heap.length - 1;
    let par = Math.floor(cur / 2);

    while (par > 0 && this.heap[par] < value) {
      this.swap(cur, par);
      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.empty()) {
      return 0;
    }
    if (this.size() === 1) {
      return this.heap.pop();
    }
    let returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let cur = 1;
    let left = 2;
    let right = 3;

    while (this.heap[cur] < this.heap[left] || this.heap[cur] < this.heap[right]) {
      if (this.heap[left] < this.heap[right]) {
        this.swap(cur, right);
        cur = right;
      } else {
        this.swap(cur, left);
        cur = left;
      }
      left = cur * 2;
      right = cur * 2 + 1;
    }

    return returnValue;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  empty() {
    if (this.heap.length == 0) {
      return true;
    }
    return false;
  }

  swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
    return;
  }


  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[parentIndex].cost <= this.heap[currentIndex].cost) break;
      this.swap(this.heap, parentIndex, currentIndex)
      currentIndex = parentIndex;
    }
  }


  extractMin() {
    if (this.heap.length == 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min
  }

  sinkDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const length = this.heap.length;
    let smallestIndex = index;

    if (leftIndex < length && this.heap[leftIndex].cost < this.heap[smallestIndex].cost) {
      smallestIndex = leftIndex;
    }
    if (rightIndex < length && this.heap[rightIndex].cost < this.heap[smallestIndex].cost) {
      smallestIndex = rightIndex;
    }
    if (smallestIndex !== index) {
      this.swap(this.heap, index, smallestIndex);
      this.sinkDown(smallestIndex)
    }
  }
}

function solution(input) {
  const [E, _] = input.shift();
  const [X, Y] = input.pop();
  const S = 1;

  let adj = Array.from(Array(E + 1), () => [])

  input.forEach(x => {
    const [u, v, w] = x;
    adj[u].push([v, w]);
    adj[v].push([u, w]);
  })

  function route(s) {

    let cost = new Array(E + 1).fill(Infinity);
    cost[s] = 0;

    let heap = new MinHeap();
    heap.insert({ node: s, cost: 0 });

    while (!heap.empty()) {
      let now = heap.extractMin();
      for (let i = 0; i < adj[now.node].length; i++) {
        const [n, c] = adj[now.node][i];
        if (cost[n] > now.cost + c) {
          cost[n] = now.cost + c;
          heap.insert({ node: n, cost: cost[n] })
        }
      }
    }

    return cost
  }

  const routeS = route(S);
  const routeX = route(X);
  const routeY = route(Y);

  const planA = routeS[X] + routeX[Y] + routeY[E];
  const planB = routeS[Y] + routeY[X] + routeX[E];
  if (planA == Infinity && planB == Infinity) {
    return -1
  } else {
    return planA > planB ? planB : planA
  };
}

console.log(solution(input));
