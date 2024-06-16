const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const data = input.map((line) => line.split(""));

  let posR = [];
  let posB = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (data[i][j] === "R") {
        posR = [i, j];
        data[i][j] = ".";
      } else if (data[i][j] === "B") {
        posB = [i, j];
        data[i][j] = ".";
      }
    }
  }

  function bfs(posR, posB) {
    const move = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    const visited = {};
    const queue = [];

    let cur = [posR.join("."), posB.join(".")].join("_");
    console.log(cur);
    visited[cur] = 0;
    queue.push(cur);
    while (queue.length > 0) {
      cur = queue.shift();
      if (visited[cur] >= 10) return -1;

      const [curPosR, curPosB] = cur.split("_").map((pos) => pos.split(".").map(Number));

      for (let i = 0; i < 4; i++) {
        const rotated = rotate([...curPosR], [...curPosB], move[i]);
        if (rotated === true) {
          return visited[cur] + 1;
        } else if (rotated != false && visited[rotated] == undefined) {
          queue.push(rotated);
          visited[rotated] = visited[cur] + 1;
        }
      }
    }
    return -1;
  }

  function rotate(posR, posB, [dx, dy]) {
    const move = (pos1, pos2) => {
      while (data[pos1[0] + dx][pos1[1] + dy] !== "#") {
        if (pos2 && pos1[0] + dx === pos2[0] && pos1[1] + dy === pos2[1]) break;
        pos1[0] += dx;
        pos1[1] += dy;
        if (data[pos1[0]][pos1[1]] === "O") return true;
      }
      return false;
    };

    if (move(posB, posR)) return false;
    if (move(posR, posB)) {
      if (move(posB)) return false;
      else return true;
    }
    if (move(posB, posR)) return false;

    return [posR.join("."), posB.join(".")].join("_");
  }

  return bfs(posR, posB);
}

console.log(solution(input));
