const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input.shift());
  let index = input[0].charCodeAt(0);
  let type = new Set();

  for (let i = 1; i < N; i++) {
    if (input[i].charCodeAt(0) === index) continue;
    if (input[i].charCodeAt(0) > index) type.add("INCREASING");
    if (input[i].charCodeAt(0) < index) type.add("DECREASING");
  }

  return type.size > 1 ? "NEITHER" : [...type][0];
}

console.log(solution(input));
