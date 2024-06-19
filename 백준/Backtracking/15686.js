const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((v) => v.split(" ").map(Number));
  const chicken = [];
  const house = [];
  let answer = Infinity;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 2) {
        chicken.push([i, j]);
      } else if (board[i][j] === 1) {
        house.push([i, j]);
      }
    }
  }

  const visited = new Array(chicken.length).fill(false);

  const getMinDistance = () => {
    let sum = 0;
    house.forEach(([hx, hy]) => {
      let min = Infinity;
      chicken.forEach(([cx, cy], index) => {
        if (visited[index] === true) {
          min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
        }
      });
      sum += min;
    });
    return sum;
  };

  function DFS(L, num) {
    if (num === M) {
      answer = Math.min(answer, getMinDistance());
      return;
    }

    for (let i = L; i < chicken.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      DFS(i, num + 1);
      visited[i] = false;
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(input));
