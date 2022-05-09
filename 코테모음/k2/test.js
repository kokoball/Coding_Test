class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(queue1, queue2) {
  let answer = 0;
  let len = queue1.length;
  let queue1Sum = queue1.reduce((a, c) => a + c);
  let queue2Sum = queue2.reduce((a, c) => a + c);

  const que1 = new Queue();
  const que2 = new Queue();

  for (let i = 0; i < len; i++) {
    que1.enqueue(queue1[i]);
  }
  for (let i = 0; i < len; i++) {
    que2.enqueue(queue2[i]);
  }

  for (let i = 0; i < len * 3; i++) {
    if (queue1Sum === queue2Sum) break;

    if (queue1Sum > queue2Sum) {
      let tem = que1.dequeue();
      que2.enqueue(tem);

      queue1Sum -= tem;
      queue2Sum += tem;
      answer++;
    } else {
      let tem = que2.dequeue();
      que1.enqueue(tem);

      queue1Sum += tem;
      queue2Sum -= tem;
      answer++;
    }
  }
  if (queue1Sum === queue2Sum) return answer;
  else return -1;
}

let queue1 = [3, 2, 7, 2];
let queue2 = [4, 6, 5, 1];

// let queue1 = [1, 2, 1, 2];
// let queue2 = [1, 10, 1, 2];

console.log(solution(queue1, queue2));
