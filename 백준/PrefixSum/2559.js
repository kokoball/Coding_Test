const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  let sum = arr.slice(0, m).reduce((a, c) => a + c, 0);

  let answer = sum;

  for (let i = 0; i < n - m; i++) {
    sum += arr[i + m] - arr[i];
    if (sum > answer) {
      answer = sum;
    }
  }

  return answer;
}

console.log(solution(input));
