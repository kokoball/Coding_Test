const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("");

function solution(input) {
  let answer = 0;
  let check = Array.from({ length: input.length }, () => 0);
  input.sort();

  let str = [];

  function DFS(L) {
    if (L === input.length) {
      answer++;
    } else {
      let pre = "";
      for (let i = 0; i < input.length; i++) {
        if (check[i] === 0 && pre !== input[i]) {
          if (L === 0 || str[L - 1] !== input[i]) {
            pre = input[i];
            check[i] = 1;
            str[L] = input[i];
            DFS(L + 1);
            check[i] = 0;
          }
        }
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(input));
