const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const arr = [];
  const answer = [];

  for (let i = 0; i < N; i++) {
    arr.push(input.shift().split(" ").map(Number));
  }

  let prefixSum = new Array(N + 1);

  for (let i = 0; i <= N; i++) {
    prefixSum[i] = new Array(N + 1).fill(0);
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      prefixSum[i][j] =
        arr[i - 1][j - 1] + prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1];
    }
  }

  for (let i = 0; i < M; i++) {
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
    let rangeValue =
      prefixSum[x2][y2] + prefixSum[x1 - 1][y1 - 1] - prefixSum[x2][y1 - 1] - prefixSum[x1 - 1][y2];
    answer.push(rangeValue);
  }

  return answer.join("\n");
}

console.log(solution(input));
