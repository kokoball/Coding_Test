// 투 포인터
const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

function solution(input) {
  const n = input[0];
  const total = input.reduce((prev, curr) => prev + curr, 0) - n;

  let from = 1;
  let dist = 0;
  let answer = 0;

  for (let to = 1; to < input.length; to++) {
    dist += input[to];
    while (dist > total - dist) {
      dist -= input[from];
      from++;
    }
    answer = Math.max(answer, dist);
  }

  return answer;
}

console.log(solution(input));
