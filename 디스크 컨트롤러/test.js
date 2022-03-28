function solution(jobs) {
  const count = jobs.length;
  const minHeap = new MinHeap();
  jobs.sort((a, b) => a[0] - b[0]);

  let time = 0;
  let complete = 0;
  let total = 0;

  while (jobs.length || minHeap.size()) {
    while (jobs.length) {
      if (jobs[0][0] === time) {
        minHeap.heappush(jobs.shift());
      } else break;
    }

    if (minHeap.size() && time >= complete) {
      const task = minHeap.heappop();
      complete = task[1] + time;
      total += complete - task[0];
    }
    time++;
  }

  return (total / count) >> 0;
}

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parIdx][1] > this.heap[curIdx][1]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  heappop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx][1] < this.heap[curIdx][1]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      this.heap[leftIdx][1] < this.heap[curIdx][1] ||
      this.heap[rightIdx][1] < this.heap[curIdx][1]
    ) {
      const minIdx =
        this.heap[leftIdx][1] > this.heap[rightIdx][1] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;

      if (leftIdx >= this.size()) break;
    }

    return min;
  }
}

const jobs = [
  [0, 3],
  [1, 9],
  [2, 6],
];

console.log(solution(jobs));
