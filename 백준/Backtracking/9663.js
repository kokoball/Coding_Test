const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input);
  const v1 = Array.from({ length: N + 1 }, () => 0);
  const v2 = Array.from({ length: N * 2 - 1 }, () => 0);
  const v3 = Array.from({ length: N * 2 - 1 }, () => 0);
  let answer = 0;

  function DFS(L) {
    if (L === N) {
      answer++;
      return;
    }

    for (let i = 0; i < N; i++) {
      if (v1[i] === 0 && v2[N + L - i - 1] === 0 && v3[L + i] === 0) {
        v1[i] = v2[N + L - i - 1] = v3[L + i] = 1;
        DFS(L + 1);
        v1[i] = v2[N + L - i - 1] = v3[L + i] = 0;
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(input));
