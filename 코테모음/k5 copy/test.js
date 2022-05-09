class Deque {
  constructor() {
    this.front = this.back = undefined;
  }
  addFront(value) {
    if (!this.front) this.front = this.back = { value };
    else this.front = this.front.next = { value, prev: this.front };
  }
  removeFront() {
    let value = this.peekFront();
    if (this.front === this.back) this.front = this.back = undefined;
    else (this.front = this.front.prev).next = undefined;
    return value;
  }
  peekFront() {
    return this.front && this.front.value;
  }
  addBack(value) {
    if (!this.front) this.front = this.back = { value };
    else this.back = this.back.prev = { value, next: this.back };
  }
  removeBack() {
    let value = this.peekBack();
    if (this.front === this.back) this.front = this.back = undefined;
    else (this.back = this.back.next).back = undefined;
    return value;
  }
  peekBack() {
    return this.back && this.back.value;
  }
}

function rotateArr(arr) {
  const [x1, y1, x2, y2] = [0, 0, arr.length - 1, arr[0].length - 1];
  const deque = new Deque();

  for (let i = 0; i < y2 - y1; i++) deque.addBack(arr[x1][y1 + i]);
  for (let i = 0; i < x2 - x1; i++) deque.addBack(arr[x1 + i][y2]);
  for (let i = 0; i < y2 - y1; i++) deque.addBack(arr[x2][y2 - i]);
  for (let i = 0; i < x2 - x1; i++) deque.addBack(arr[x2 - i][y1]);

  deque.addFront(deque.removeBack());

  for (let i = 0; i < y2 - y1; i++)
    arr[x1][y1 + i] = Number(deque.removeFront());
  for (let i = 0; i < x2 - x1; i++)
    arr[x1 + i][y2] = Number(deque.removeFront());
  for (let i = 0; i < y2 - y1; i++)
    arr[x2][y2 - i] = Number(deque.removeFront());
  for (let i = 0; i < x2 - x1; i++)
    arr[x2 - i][y1] = Number(deque.removeFront());

  return arr;
}
function shiftArr(arr) {
  let flatArr = arr.flat();
  let len = arr[0].length;
  let arr1 = flatArr.slice(0, len * arr.length - len);
  let arr2 = flatArr.slice(len * arr.length - len);

  let temArr = arr2.concat(arr1);
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Number(temArr[index++]);
    }
  }
  return arr;
}

function solution(rc, operations) {
  const row = rc.length;
  const column = rc[0].length;
  const strAll = rc.flat();
  let index = 0;

  let arr = Array.from(
    Array(row)
      .fill(0)
      .map(() => Array(column))
  );

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = strAll[index++];
    }
  }

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "Rotate") arr = rotateArr(arr);
    else if (operations[i] === "ShiftRow") arr = shiftArr(arr);
  }

  return arr;
}

let rc = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let operations = ["Rotate", "ShiftRow"];

// let rc = [
//   [8, 6, 3],
//   [3, 3, 7],
//   [8, 4, 9],
// ];
// let operations = ["Rotate", "ShiftRow", "ShiftRow"];

// let rc = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// let operations = ["ShiftRow", "Rotate", "ShiftRow", "Rotate"];

// let rc = [
//   [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
//   [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
//   [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
//   [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
//   [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
//   [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
//   [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
//   [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
//   [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
// ];

// let operations = [
//   "ShiftRow",
//   "Rotate",
//   "ShiftRow",
//   "Rotate",
//   "ShiftRow",
//   "Rotate",
//   "ShiftRow",
//   "Rotate",
// ];

console.log(solution(rc, operations));
