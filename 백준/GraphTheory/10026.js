const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input.shift());
  const grid = [];
  const grid2 = [];
  const ds = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  const answer = [0, 0];

  const convert = (char, isGrid2 = false) => {
    switch (char) {
      case "G":
        return 1;
      case "R":
        return isGrid2 ? 1 : 2;
      case "B":
        return 3;
    }
  };

  for (let i = 0; i < N; i++) {
    const arr = input[i].split("");
    grid.push(arr.map((char) => convert(char)));
    grid2.push(arr.map((char) => convert(char, true)));
  }

  const bfs = (start, board) => {
    const queue = [start];
    const type = board[start[0]][start[1]];
    board[start[0]][start[1]] = 0;

    while (queue.length) {
      const [curY, curX] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const ny = curY + ds[i][1];
        const nx = curX + ds[i][0];

        if (ny >= 0 && ny < N && nx >= 0 && nx < N && board[ny][nx] && board[ny][nx] !== 0) {
          if (type === board[ny][nx]) {
            board[ny][nx] = 0;
            queue.push([ny, nx]);
          }
        }
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j]) {
        bfs([i, j], grid);
        answer[0]++;
      }
      if (grid2[i][j]) {
        bfs([i, j], grid2);
        answer[1]++;
      }
    }
  }

  // console.log(grid, grid2);

  return answer.join(" ");
}

console.log(solution(input));
