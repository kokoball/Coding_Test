class Node {
  constructor(value) {
    // 값과 포인트
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    // 생성 시기에는 아무것도 가르키지 x
    this.head = null;
    this.tail = null;
  }

  // 특정 값을 가지고 있는 노드 찾기
  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }
  // 끝 부분에 Node 추가
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // Node 중간에 추가
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }
  // 상수 시간으로 삭제하고 싶다면 이전 노드를 입력값으로 받음
  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currNode = this.head;
    let displayString = "[";
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.slice(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.display();

console.log(linkedList.find(3));

linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();
