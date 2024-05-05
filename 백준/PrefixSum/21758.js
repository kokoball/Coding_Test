// 전체에서 그 전까지의 sum을(i-1) 빼면 누적합 배열을 뒤로 생각하는 것
// sum[N] - sum[i - 1]

const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = input.shift().split(" ").map(Number);
  const arr = input.shift().split(" ").map(Number);
  const sum = new Array(N + 1).fill(0);
  let answer = 0;

  arr.unshift(0);

  for (let i = 1; i <= N; i++) {
    sum[i] = arr[i] + sum[i - 1];
  }

  for (let i = 2; input < N; i++) {
    // 차례로 꿀통 ~ 벌 ~ 벌
    // 벌 ~ 벌 ~ 꿀통
    // 벌 ~ 꿀통 ~ 벌
    answer = Math.max(answer, sum[N] - arr[N] - arr[i] + sum[i - 1]);
    answer = Math.max(answer, sum[N] - arr[1] - arr[i] + sum[N] - sum[i]);
    answer = Math.max(answer, sum[i] - arr[1] + sum[N] - sum[i - 1] - arr[N]);
  }

  return answer;
}

console.log(solution(input));
