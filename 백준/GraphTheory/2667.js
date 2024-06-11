const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input.shift());
  const grid = input.map((v) => v.split("").map(Number));
  const answer = [];
  const ds = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  const bfs = (start) => {
    const queue = [start];
    let cnt = 0;

    while (queue.length) {
      const [curY, curX] = queue.shift();
      cnt++;

      for (let i = 0; i < 4; i++) {
        const ny = curY + ds[i][1];
        const nx = curX + ds[i][0];

        if (ny >= 0 && ny < N && nx >= 0 && nx < N && grid[ny][nx]) {
          grid[ny][nx] = 0;
          queue.push([ny, nx]);
        }
      }
    }
    return cnt;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j]) {
        grid[i][j] = 0;
        answer.push(bfs([i, j]));
      }
    }
  }
  answer.sort((a, b) => a - b);
  answer.unshift(answer.length);

  return answer;
}

console.log(solution(input).join("\n"));
