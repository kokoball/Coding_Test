const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  const visited = new Array(N).fill(false);
  let nowWeight = 500;
  let answer = 0;

  function dfs(k) {
    if (k === N) {
      return answer++;
    }
    for (let i = 0; i < N; i++) {
      if (visited[i]) continue;

      if (nowWeight + arr[i] - M >= 500) {
        visited[i] = true;
        nowWeight = nowWeight + arr[i] - M;
        dfs(k + 1);
        visited[i] = false;
        nowWeight = nowWeight - arr[i] + M;
      }
    }
  }

  dfs(0);
  return answer;
}

console.log(solution(input));
