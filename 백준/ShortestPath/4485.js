const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const solution = (input) => {
  let N = +input.shift();
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let answerCount = 1;
  let answer = '';

  while (N !== 0) {
    const map = input.splice(0, N).map((e) => e.split(' ').map(Number));
    dijkstra([0, 0], map);
    N = +input.shift();
  }

  return (answer.trimEnd());

  function dijkstra(start, map) {
    const [x, y] = start;
    const distance = Array.from({ length: N }, () => Array(N).fill(Infinity));

    const queue = [[x, y]];
    let front = 0;
    distance[y][x] = map[y][x];

    while (queue.length > front) {
      const [x, y] = queue[front++];
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (ny >= 0 && nx >= 0 && ny < N && nx < N && distance[ny][nx] > distance[y][x] + map[ny][nx]) {
          distance[ny][nx] = distance[y][x] + map[ny][nx];
          queue.push([nx, ny]);
        }
      }
    }
    answer += `Problem ${answerCount++}: ${distance[N - 1][N - 1]}\n`;
  }
};

console.log(solution(input));