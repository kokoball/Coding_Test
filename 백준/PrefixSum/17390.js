const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, Q] = input.shift().split(" ").map(Number);
  const arr = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const prefixSum = new Array(N + 1).fill(0);
  const answer = new Array(Q).fill(0);

  for (let i = 1; i <= N; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
  }

  for (let i = 0; i < Q; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    answer[i] = prefixSum[end] - prefixSum[start - 1];
  }

  return answer.join("\n");
}

console.log(solution(input));
