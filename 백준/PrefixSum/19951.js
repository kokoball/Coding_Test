const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const arr = input.shift().split(" ").map(Number);
  const prefixSum = Array.from({ length: N }, () => 0);

  for (let i = 0; i < M; i++) {
    const [start, end, num] = input[i].split(" ").map(Number);

    prefixSum[start - 1] += num;
    if (end < N) prefixSum[end] += -num;
  }

  let acc = 0;
  for (let i = 0; i < N; i++) {
    acc += prefixSum[i];
    arr[i] += acc;
  }

  return arr.join(" ");
}

console.log(solution(input));
