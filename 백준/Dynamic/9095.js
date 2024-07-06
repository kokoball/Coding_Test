const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const cases = input[0];
  const arr = [0, 1, 2, 4];
  const answer = [];

  for (let i = 1; i <= cases; i++) {
    let num = input[i];
    for (let j = 4; j <= num; j++) {
      arr[j] = arr[j - 1] + arr[j - 2] + arr[j - 3];
    }
    answer.push(arr[num]);
  }

  return answer.join("\n");

}

console.log(solution(input));
