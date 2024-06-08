// replace 정규식

const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let answer = input[0].replace(/XXXX/g, "AAAA").replace(/XX/g, "BB");
  answer.includes("X") ? (answer = -1) : answer;

  return answer;
}

console.log(solution(input));
