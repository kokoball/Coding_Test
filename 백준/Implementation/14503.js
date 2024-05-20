const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [n, m] = input.shift().split(" ").map(Number);
  let [x, y, d] = input.shift().split(" ").map(Number);
  const arr = input.map((i) => i.split(" ").map(Number));
  const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let ans = 0;
  let cnt = 0;

  while (1) {
    if (!visited[x][y]) {
      visited[x][y] = true;
      arr[x][y] = -1;
      ans++;
    }

    const [nextX, nextY] = [x + dx[(d + 3) % 4], y + dy[(d + 3) % 4]];
    if (arr[nextX][nextY] === 0) {
      x = nextX;
      y = nextY;
      cnt = 0;
    } else {
      cnt++;
    }
    d = (d + 3) % 4;

    if (cnt === 4) {
      const [backX, backY] = [x + dx[(d + 2) % 4], y + dy[(d + 2) % 4]];
      if (arr[backX][backY] === 1) break;
      else {
        x = backX;
        y = backY;
        cnt = 0;
      }
    }
  }

  return ans;
}

console.log(solution(input));
