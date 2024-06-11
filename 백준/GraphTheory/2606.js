const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const qty = Number(input.shift());
  const pair = Number(input.shift());
  const computers = input.map((v) => v.split(" ").map(Number));

  let answer = 0;
  let visited = Array(qty + 1).fill(false);
  let graph = Array.from(Array(qty + 1)).map(() => []);

  computers.map(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  const bfs = (start) => {
    let queue = [start];
    while (queue.length) {
      const node = queue.shift();
      if (!visited[node]) {
        visited[node] = true;
        answer++;
        queue.push(...graph[node]);
      }
    }
  };

  bfs(1);

  return answer - 1;
}

console.log(solution(input));
