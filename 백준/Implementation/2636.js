const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [R, C] = input.shift().split(" ").map(Number);
  let nowCount = 0;
  let time = 0;
  let remainCheeze = 0;

  const board = input.map((e) => {
    const arr = e.split(" ").map(Number);
    nowCount += arr.filter((i) => i === 1).length;
    return arr;
  });

  const checkBorder = (x, y) => {
    if (board[x - 1][y] === 0) return true;
    if (board[x + 1][y] === 0) return true;
    if (board[x][y - 1] === 0) return true;
    if (board[x][y + 1] === 0) return true;

    return false;
  };

  const checkBorderCheeze = () => {
    let count = 0;

    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (board[i][j] === 1 && checkBorder(i, j)) {
          console.log(123);
          board[i][j] = 2;
          count++;
        }
      }
    }

    console.log("ch", count);
    return count;
  };

  while (1) {
    time++;
    const count = checkBorderCheeze();

    console.log(time, count, remainCheeze, nowCount, 890);

    if (nowCount - count === 0) {
      remainCheeze = count;
      break;
    } else {
      nowCount -= count;
    }

    break;
  }

  console.log(time, remainCheeze);
  return answer;
}

console.log(solution(input));
