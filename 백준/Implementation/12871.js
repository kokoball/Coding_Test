const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {

  let s = input.shift()
  let t = input.shift()

  if (s.length > t.length) {
    const temp = t;
    t = s;
    s = temp;
  }

  const ls = s.length;
  const lt = t.length;

  const ns = s.repeat(Math.floor(100 / ls)) + s.slice(0, 100 % ls);
  const nt = t.repeat(Math.floor(100 / lt)) + t.slice(0, 100 % lt);

  return (ns === nt) ? 1 : 0;
}

console.log(solution(input));
