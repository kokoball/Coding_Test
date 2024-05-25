const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const K = input.shift().split("").map(Number)[0];
  const arr = input.map((e) => e.split(" ").map(Number));

  let maxHeight = 0,
    maxWidht = 0;
  let maxHeightIdx = -1,
    maxWidhtIdx = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 1 || arr[i][0] == 2) {
      if (maxHeight < arr[i][1]) {
        maxHeight = arr[i][1];
        maxHeightIdx = i;
      }
    } else {
      if (maxWidht < arr[i][1]) {
        maxWidht = arr[i][1];
        maxWidhtIdx = i;
      }
    }
  }

  let squareMax = maxWidht * maxHeight;
  let squareMin = arr[(maxWidhtIdx + 3) % 6][1] * arr[(maxHeightIdx + 3) % 6][1];

  return (squareMax - squareMin) * K;
}

console.log(solution(input));
