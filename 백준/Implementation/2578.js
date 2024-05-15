const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let board = [];
  let visited = Array.from({ length: 5 }, () => Array(5).fill(0));
  let nums = [];
  let answer;

  for (let i = 0; i < 5; i++) {
    board.push(input[i].trim().split(" ").map(Number));
  }

  for (let i = 5; i < 10; i++) {
    nums.push(input[i].trim().split(" ").map(Number));
  }

  //대각선 빙고 있는지 확인
  const isCross = (visited) => {
    let cnt = 0;
    if (
      //왼쪽 대각선
      visited[0][0] &&
      visited[1][1] &&
      visited[2][2] &&
      visited[3][3] &&
      visited[4][4]
    ) {
      cnt++;
    }
    if (
      //오른쪽 대각선
      visited[0][4] &&
      visited[1][3] &&
      visited[2][2] &&
      visited[3][1] &&
      visited[4][0]
    ) {
      cnt++;
    }

    return cnt;
  };

  //가로세로 빙고 있는지 확인
  const isLine = (visited) => {
    let cnt = 0;
    for (let i = 0; i < 5; i++) {
      if (
        //가로 빙고 확인
        visited[i][0] &&
        visited[i][1] &&
        visited[i][2] &&
        visited[i][3] &&
        visited[i][4]
      ) {
        cnt++;
      }
      if (
        //세로 빙고 확인
        visited[0][i] &&
        visited[1][i] &&
        visited[2][i] &&
        visited[3][i] &&
        visited[4][i]
      ) {
        cnt++;
      }
    }

    return cnt;
  };

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const now = nums[i][j];
      board.map((v, idx) => {
        if (v.includes(now)) {
          visited[idx][v.indexOf(now)] = 1;
        }
      });

      let cross = isCross(visited);
      let line = isLine(visited);

      if (cross + line >= 3) {
        answer = i * 5 + (j + 1);
        i = 5;
        break;
      }
    }
  }

  return answer;
}

console.log(solution(input));
