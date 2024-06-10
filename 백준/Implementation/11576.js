const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [A, B] = input[0].split(" ").map(Number);
  const [N] = input[1].split(" ").map(Number);

  const nums = input[2].split(" ").map(Number).reverse();
  const answer = [];
  let DEC = 0;

  for (let i = 0; i < N; i++) {
    DEC += nums[i] * A ** i;
  }

  if (DEC == 0) return 0;

  while (DEC > 0) {
    answer.unshift(DEC % B);
    DEC = Math.floor(DEC / B);
  }

  return answer.join(" ");
}

console.log(solution(input));
