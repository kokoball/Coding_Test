const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0])
  const lines = input.slice(1).map((v) => v.split(" ").map(Number));
  const graph = Array.from(Array(N + 1)).map(() => []);
  let answer = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if(lines[i][j]) graph[i + 1].push(j + 1)
    }
  }
  
  const bfs = (start) => {
    let queue = [start];
    const visited = Array(N + 1).fill(false);

    while (queue.length) {
      const node = queue.shift();
      for (const vertax of graph[node]) {
        if (!visited[vertax]) {
          visited[vertax] = true;
          queue.push(vertax);
        }
      }
    }
    answer.push(visited.slice(1).map(i => i ? 1 : 0))
  };

  for (let i = 1; i <= N; i++) {
    bfs(i);
  }

  return answer.map(v => v.join(" ")).join("\n");
}

console.log(solution(input));
