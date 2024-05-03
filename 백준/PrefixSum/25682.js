// https://www.acmicpc.net/status?user_id=kbp4154&problem_id=25682&from_mine=1
// 시간 초과, 누적합으로 다시 풀기

const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const [N, M, K] = input.shift().split(" ").map(Number);
  let minRepaints = Infinity;

  for (let startRow = 0; startRow <= N - K; startRow++) {
    for (let startCol = 0; startCol <= M - K; startCol++) {
      let repaintsBlack = 0;
      let repaintsWhite = 0;

      for (let i = startRow; i < startRow + K; i++) {
        for (let j = startCol; j < startCol + K; j++) {
          if ((i + j) % 2 === 0) {
            if (input[i][j] !== "B") repaintsBlack++;
          } else {
            if (input[i][j] !== "W") repaintsBlack++;
          }

          if ((i + j) % 2 === 0) {
            if (input[i][j] !== "W") repaintsWhite++;
          } else {
            if (input[i][j] !== "B") repaintsWhite++;
          }
        }
      }

      minRepaints = Math.min(minRepaints, repaintsBlack, repaintsWhite);
    }
  }

  return minRepaints;
}

console.log(solution(input));
