function replaceAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substr(0, index) + chr + str.substr(index + 1);
}

function rotateArr(strAll, rowLength, colLength) {
  const [x1, y1, x2, y2] = [0, 0, rowLength - 1, colLength - 1];
  const queue = [];

  for (let i = 0; i < y2 - y1; i++) queue.push(strAll[i]);
  for (let i = 0; i < x2 - x1; i++) queue.push(strAll[y2 + rowLength * i]);
  for (let i = 0; i < y2 - y1; i++) queue.push(strAll[strAll.length - 1 - i]);
  for (let i = 0; i < x2 - x1; i++)
    queue.push(strAll[strAll.length - colLength - i * rowLength]);

  queue.unshift(queue.pop());

  for (let i = 0; i < y2 - y1; i++)
    strAll = replaceAt(strAll, i, queue.shift());
  for (let i = 0; i < x2 - x1; i++)
    strAll = replaceAt(strAll, y2 + rowLength * i, queue.shift());
  for (let i = 0; i < y2 - y1; i++)
    strAll = replaceAt(strAll, strAll.length - 1 - i, queue.shift());
  for (let i = 0; i < x2 - x1; i++)
    strAll = replaceAt(
      strAll,
      strAll.length - colLength - i * rowLength,
      queue.shift()
    );

  return strAll;
}
function shiftArr(str, rowLength, colLength) {
  let arr1 = str.slice(0, colLength * rowLength - colLength);
  let arr2 = str.slice(colLength * rowLength - colLength);

  let temArr = arr2.concat(arr1);

  return temArr;
}

function solution(rc, operations) {
  const rowLength = rc.length;
  const colLength = rc[0].length;
  let strAll = rc.flat().join("");
  let index = 0;

  let answer = Array.from(
    Array(rowLength)
      .fill(0)
      .map(() => Array(colLength))
  );

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "Rotate")
      strAll = rotateArr(strAll, rowLength, colLength);
    else if (operations[i] === "ShiftRow")
      strAll = shiftArr(strAll, rowLength, colLength);
  }

  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer[i].length; j++) {
      answer[i][j] = +strAll[index++];
    }
  }

  return answer;
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

// let operations = ["ShiftRow"];

console.log(solution(rc, operations));
