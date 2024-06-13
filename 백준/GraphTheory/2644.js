// 그래프 DFS

const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input.shift());
  const [a, b] = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  const M = Number(input.shift());
  const lines = input.map((v) => v.split(" ").map(Number));
  const visited = Array(N + 1).fill(false);
  const graph = Array.from(Array(N + 1)).map(() => []);

  lines.map(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  const dfs = (start, target) => {
    let stack = [[start, 0]];

    visited[start] = true;

    while (stack.length) {
      const [curNum, depth] = stack.pop();

      if (curNum === target) return depth;

      for (const node of graph[curNum]) {
        if (!visited[node]) {
          visited[node] = true;
          stack.push([node, depth + 1]);
        }
      }
    }
    return -1;
  };

  return dfs(a, b);
}

console.log(solution(input));
