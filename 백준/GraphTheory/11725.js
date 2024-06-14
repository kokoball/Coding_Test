const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input.shift());
  const lines = input.map((v) => v.split(" ").map(Number));
  const answer = Array(N + 1).fill(0);
  const graph = Array.from(Array(N + 1)).map(() => []);

  lines.map(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  const bfs = (start) => {
    let queue = [start];
    while (queue.length) {
      const node = queue.shift();
      for (const vertax of graph[node]) {
        if (answer[vertax] === 0) {
          answer[vertax] = node;
          queue.push(vertax);
        }
      }
    }
  };

  bfs(1);

  return answer.slice(2).join("\n");
}

console.log(solution(input));
