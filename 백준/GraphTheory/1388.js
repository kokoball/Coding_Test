const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const board = input.map((v) => v.split(""));
  const visited = Array.from(Array(N), () => Array(M).fill(false));
  let answer = 0;

  const bfs = (start) => {
    const queue = [start];

    while (queue.length) {
      const [curY, curX] = queue.shift();
      visited[curY][curX] = true;

      if (board[curY][curX] === "-") {
        if (curX + 1 < M && board[curY][curX + 1] === "-") {
          queue.push([curY, curX + 1]);
        }
      } else {
        if (curY + 1 < N && board[curY + 1][curX] === "|") {
          queue.push([curY + 1, curX]);
        }
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j]) {
        bfs([i, j]);
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(input));
