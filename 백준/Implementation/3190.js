const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const K = Number(input[1]);
  const L = Number(input[2 + K]);

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const bodyQueue = [];

  let totalTime = 1;
  let dir = 0;

  const board = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
  const directionArr = [];

  for (let i = 2; i < 2 + K; i++) {
    const [X, Y] = input[i].split(" ").map(Number);
    board[X][Y] = 1;
  }

  for (let i = 0; i < L; i++) {
    const [n, d] = input[K + 3 + i].split(" ");
    directionArr.push([Number(n), d]);
  }

  const rotatePosition = directionArr.map((v) => v[0]);

  let [x, y] = [1, 1];
  board[x][y] = 2;

  bodyQueue.push([x, y]);

  while (true) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (nx <= 0 || nx >= N + 1 || ny <= 0 || ny >= N + 1) break;
    if (board[nx][ny] === 2) break;

    if (board[nx][ny] === 0) {
      board[nx][ny] = 2;
      const [tx, ty] = bodyQueue.shift();
      board[tx][ty] = 0;
    } else if (board[nx][ny] === 1) {
      board[nx][ny] = 2;
    }

    const p = rotatePosition.indexOf(totalTime);

    if (p !== -1) {
      const d = directionArr[p][1];

      if (d === "D") dir = (dir + 1) % 4;
      else dir = (4 + dir - 1) % 4;
    }

    bodyQueue.push([nx, ny]);
    x = nx;
    y = ny;
    totalTime++;
  }

  return totalTime;
}

console.log(solution(input));
