const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = input[0].split(" ").map(Number)[0];
  const eggs = [];
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    eggs.push(input[i].split(" ").map(Number));
  }

  function dfs(now) {
    if (now == N) {
      let broken = 0;
      for (let i = 0; i < N; i++) {
        if (eggs[i][0] <= 0) broken++;
      }
      answer = Math.max(broken, answer);
      return;
    }
    let flag = true;
    for (let next = 0; next < N; next++) {
      if (next == now) continue;
      if (eggs[now][0] <= 0 || eggs[next][0] <= 0) continue;
      flag = false;
      eggs[now][0] = eggs[now][0] - eggs[next][1];
      eggs[next][0] = eggs[next][0] - eggs[now][1];
      dfs(now + 1);
      eggs[now][0] = eggs[now][0] + eggs[next][1];
      eggs[next][0] = eggs[next][0] + eggs[now][1];
    }
    if (flag) dfs(now + 1);
  }

  dfs(0);
  return answer;
}

console.log(solution(input));
