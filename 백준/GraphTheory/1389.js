const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const lines = input.map((v) => v.split(" ").map(Number));
  const graph = Array.from(Array(N + 1)).map(() => []);
  const answer = new Array(N + 1).fill(0);

  lines.map(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  const dfs = (start) => {
    const visited = new Array(N + 1).fill(false);
    const queue = [[start, 0]];

    while (queue.length) {
      let [node, count] = queue.shift();
      if (!visited[node]) {
        visited[node] = true;
        answer[start] += count++;
        graph[node].forEach((v) => queue.push([v, count]));
      }
    }
  };

  for (let i = 1; i <= N; i++) {
    dfs(i);
  }
  answer.shift();

  const min = Math.min(...answer);

  return answer.indexOf(min) + 1;
}

console.log(solution(input));
