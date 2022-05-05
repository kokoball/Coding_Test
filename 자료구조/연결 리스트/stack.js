// Linked List로 Stack 구현
// 링크드 리스트로 스택 구현

class Node {
  constructor(value) {
    // 값과 포인트
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    // 생성 시기에는 아무것도 가르키지 x
    this.top = null;
    this.size = 0;
  }

  // Node 중간에 추가
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }
  // 상수 시간으로 삭제하고 싶다면 이전 노드를 입력값으로 받음
  pop() {
    let value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());

stack.push(4);
console.log(stack.pop());
console.log(stack.pop());
