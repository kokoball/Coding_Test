const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const board = input.map((v) => v.split(" ").map(Number));
  const emptyArr = [];
  const virusArr = [];
  const safeArea = [];

  const dir = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!board[i][j]) emptyArr.push([i, j]);
      else if (board[i][j] == 2) virusArr.push([i, j]);
    }
  }

  for (let i = 0; i < emptyArr.length; i++) {
    for (let j = i + 1; j < emptyArr.length; j++) {
      for (let k = j + 1; k < emptyArr.length; k++) {
        const tempBoard = JSON.parse(JSON.stringify(board));

        tempBoard[emptyArr[i][0]][emptyArr[i][1]] = 1;
        tempBoard[emptyArr[j][0]][emptyArr[j][1]] = 1;
        tempBoard[emptyArr[k][0]][emptyArr[k][1]] = 1;

        const bfs = () => {
          const tmpVirus = JSON.parse(JSON.stringify(virusArr));
          let vCnt = 0;
          while (tmpVirus.length) {
            const [x, y] = tmpVirus.shift();

            for (let i = 0; i < 4; i++) {
              const nx = x + dir[i][0];
              const ny = y + dir[i][1];

              if (
                nx >= 0 &&
                nx < N &&
                ny >= 0 &&
                ny < M &&
                !tempBoard[nx][ny]
              ) {
                tempBoard[nx][ny] = 2;
                vCnt++;
                tmpVirus.push([nx, ny]);
              }
            }
          }
          safeArea.push(emptyArr.length - vCnt - 3);
        };

        bfs();
      }
    }
  }

  return Math.max(...safeArea);
}

console.log(solution(input));
