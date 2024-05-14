const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const X = Number(input.shift());
  let answer;
  let now = 1;
  let index = 1;

  for (let i = 1; i <= X; i++) {
    if (X === i) {
      let top = now % 2 === 0 ? index : now - index + 1;
      let bottom = now % 2 === 0 ? now - index + 1 : index;
      answer = top + "/" + bottom;
    } else {
      if (now - index === 0) {
        now++;
        index = 1;
      } else index++;
    }
  }

  return answer;
}

console.log(solution(input));
