// Linked List로 Queue 구현
class Node {
  constructor(value) {
    // 값과 포인트
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    // 생성 시기에는 아무것도 가르키지 x
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Node 중간에 추가
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
  // 상수 시간으로 삭제하고 싶다면 이전 노드를 입력값으로 받음
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

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());

queue.enqueue(8);
console.log(queue.size);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
