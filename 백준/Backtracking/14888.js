const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = input[0].split(" ").map(Number)[0];
  const arr = input[1].split(" ").map(Number);
  const operators = input[2].split(" ").map(Number);
  let max = -Infinity;
  let min = Infinity;

  const calculate = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => ~~(a / b)];

  const dfs = (count, result) => {
    if (count === N - 1) {
      max = Math.max(max, result);
      min = Math.min(min, result);
      return;
    } else {
      for (let i = 0; i < 4; i++) {
        if (!operators[i]) {
          continue;
        }
        operators[i]--;
        dfs(count + 1, calculate[i](result, arr[count + 1]));
        operators[i]++;
      }
    }
  };

  dfs(0, arr[0]);
  return max + `\n` + min;
}

console.log(solution(input));
