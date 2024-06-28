const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = +input.shift();
  const premise = input.slice(0, N).map(v => v.split(' '));
  const after = input.slice(N);
  const M = +after.shift();
  const conclusion = after.map(v => v.split(' '));
  const answer = [];

  const graph = Array.from({ length: 26 }, () => []);

  for (const [first, , second] of premise) {
    const from = first.charCodeAt(0) - 'a'.charCodeAt(0);
    const to = second.charCodeAt(0) - 'a'.charCodeAt(0);
    graph[from].push(to);
  }


  function dfs(from, target) {
    const visited = Array(26).fill(false);
    const queue = [from];
    visited[from] = true;

    while (queue.length > 0) {
      const cur = queue.shift();
      if (cur === target) return true;

      for (const next of graph[cur]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }

    return false;
  }

  for (const [first, , second] of conclusion) {
    const from = first.charCodeAt(0) - 'a'.charCodeAt(0);
    const to = second.charCodeAt(0) - 'a'.charCodeAt(0);

    if (dfs(from, to)) {
      answer.push('T');
    } else {
      answer.push('F');
    }
  }
  return answer.join('\n');
}

console.log(solution(input));
