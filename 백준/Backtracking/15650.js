// 백트래킹 기본

const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = Array(M).fill("");
const visited = Array(N + 1).fill(false);
const result = [];
dfs(0, 1);

function dfs(lev, start) {
  if (lev === M) {
    console.log(arr.join(" "));
    return;
  }
  for (let i = start; i <= N; i++) {
    if (visited[i]) {
      continue;
    }
    arr[lev] = i;
    visited[i] = true;
    dfs(lev + 1, i);
    visited[i] = false;
  }
}
