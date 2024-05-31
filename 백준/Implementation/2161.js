const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let N = Number(input[0]);

  const array = Array.from({ length: N }, (_, index) => index + 1);
  const nArray = [];

  while (array.length !== 0) {
    const i = array.shift();
    nArray.push(i);
    if (array.length !== 0) {
      array.push(array.shift());
    } else {
      break;
    }
  }

  return [...nArray].join(" ");
}

console.log(solution(input));
