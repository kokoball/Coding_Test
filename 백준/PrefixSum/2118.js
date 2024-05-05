const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = input.shift().split(" ").map(Number);
  const arr = new Array(N + 1).fill(0);
  let maxVal = -Infinity;

  for (let i = 1; i <= N; i++) {
    arr[i] = Number(input[i - 1]) + arr[i - 1];
  }

  for (let i = 1; i <= N; i++) {
    for (let j = i + 1; j <= N; j++) {
      const rightDistance = arr[j] - arr[i];
      const leftDistance = arr[N] - rightDistance;

      if (rightDistance > leftDistance) break;
      const num = Math.min(leftDistance, rightDistance);
      maxVal = Math.max(maxVal, num);
    }
  }

  return maxVal;
}

console.log(solution(input));
