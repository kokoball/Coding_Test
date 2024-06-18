const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const seq = new Array(M).fill(0);
  let result = "";

  function dfs(k) {
    if (k === M) {
      return (result += `${seq.join(" ")}\n`);
    }
    for (let i = 1; i <= N; i++) {
      seq[k] = i;
      dfs(k + 1);
    }
  }

  dfs(0);
  return result;
}

console.log(solution(input));
