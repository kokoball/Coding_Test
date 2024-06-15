const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [M, N, K] = input.shift().split(" ").map(Number);
  const board = Array.from(Array(M), () => Array(N).fill(0));
  const ds = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  const answer = [];

  for (let i = 0; i < K; i++) {
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

    for (let j = y1; j < y2; j++) {
      for (let k = x1; k < x2; k++) {
        board[j][k] = 1;
      }
    }
  }

  const bfs = (start) => {
    const queue = [start];
    let cnt = 0;

    while (queue.length) {
      const [curY, curX] = queue.shift();
      cnt++;

      for (let i = 0; i < 4; i++) {
        const ny = curY + ds[i][1];
        const nx = curX + ds[i][0];

        if (ny >= 0 && ny < M && nx >= 0 && nx < N && !board[ny][nx]) {
          board[ny][nx] = 1;
          queue.push([ny, nx]);
        }
      }
    }
    return cnt;
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!board[i][j]) {
        board[i][j] = 1;
        answer.push(bfs([i, j]));
      }
    }
  }

  answer.sort((a, b) => a - b);

  return answer.length + "\n" + answer.join(" ");
}

console.log(solution(input));
