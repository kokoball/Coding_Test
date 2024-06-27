const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M, K, X] = input[0].split(" ").map(Number);
  const lines = input.slice(1).map((v) => v.split(" ").map(Number));
  const graph = Array.from(Array(N + 1)).map(() => []);
  const distance = Array(N + 1).fill(0);
  let answer = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j]) graph[i + 1].push(j + 1)
    }
  }

  lines.map(([from, to]) => {
    graph[from].push(to);
  });

  const bfs = (start) => {
    const queue = [start];
    distance[start] = 1;

    while (queue.length) {
      const now = queue.shift();
      if (distance[now] == K + 1) {
        answer.push(now);
        continue;
      }
      for (const next of graph[now]) {
        if (!distance[next]) {
          queue.push(next);
          distance[next] = distance[now] + 1;
        }
      }
    }
  };

  bfs(X);

  console.log(answer)
  if (answer.length) {
    answer = answer.sort((a, b) => a - b).join('\n');
  } else answer = -1;

  return answer
}

console.log(solution(input));
