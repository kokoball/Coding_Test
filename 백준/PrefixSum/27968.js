// 시간
const fs = require("fs");
const [_, candyBag, ...children] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const B = candyBag
  .split(" ")
  .map(Number)
  .reduce((acc, cur) => [...acc, acc[acc.length - 1] + cur], [0]);
const C = children.map(Number);

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  let index = -1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] <= target) {
      start = mid + 1;
      index = mid;
    } else {
      end = mid - 1;
    }
  }

  return index;
};

const answer = C.map((c) => (c > B[B.length - 1] ? "Go away!" : binarySearch(B, c)));

console.log(answer.join("\n"));
