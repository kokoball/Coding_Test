// 배열로 Queue 구현

class Queue {
  constructor() {
    // 생성 시기에는 아무것도 가르키지 x
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // Node 중간에 추가
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  // 상수 시간으로 삭제하고 싶다면 이전 노드를 입력값으로 받음
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());

queue.enqueue(8);
console.log(queue.size());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
