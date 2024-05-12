const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  input.shift();
  const stack = [];

  const fun = {
    pop: () => stack.pop() || -1,
    size: () => stack.length,
    empty: () => (stack[0] ? 0 : 1),
    top: () => stack[stack.length - 1] || -1,
    push: (item) => {
      stack.push(item.split(" ")[1]);
      return "";
    },
  };

  const result = input.reduce((acc, v) => acc + (fun[v] ? `${fun[v]()}\n` : fun.push(v)), "");

  return result;
}

console.log(solution(input));
