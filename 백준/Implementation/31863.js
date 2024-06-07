// BFS

const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

class Earthquake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const map = input.slice(1).map((line) => line.split(""));

  const ROOT = "@",
    STRONG_BUILDING = "#",
    WEAK_BUILDING = "*",
    OBSTACLE = "|";
  const dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0];

  let earthquakeCnt = Array.from(Array(N), () => Array(M).fill(0));
  let isDestroyed = Array.from(Array(N), () => Array(M).fill(false));
  let buildingCnt = 0,
    destroyedBuildingCnt = 0;
  let queue = [];
  let rootEarthquake = null;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === ROOT) {
        rootEarthquake = new Earthquake(i, j);
      } else if (map[i][j] === STRONG_BUILDING || map[i][j] === WEAK_BUILDING) {
        buildingCnt++;
      }
    }
  }

  function spreadEarthquake(rootEarthquake) {
    for (let j = 0; j < 4; j++) {
      for (let i = 1; i <= 2; i++) {
        let nx = rootEarthquake.x + dx[j] * i;
        let ny = rootEarthquake.y + dy[j] * i;
        if (!outOfBound(nx, ny)) {
          if (map[nx][ny] === OBSTACLE) {
            break;
          } else {
            earthquakeCnt[nx][ny]++;
            queue.push(new Earthquake(nx, ny));
          }
        }
      }
    }

    while (queue.length > 0) {
      let eq = queue.shift();
      let canDestroy = false;
      if (
        map[eq.x][eq.y] === STRONG_BUILDING &&
        earthquakeCnt[eq.x][eq.y] >= 2 &&
        !isDestroyed[eq.x][eq.y]
      ) {
        destroyedBuildingCnt++;
        canDestroy = true;
      } else if (
        map[eq.x][eq.y] === WEAK_BUILDING &&
        earthquakeCnt[eq.x][eq.y] >= 1 &&
        !isDestroyed[eq.x][eq.y]
      ) {
        destroyedBuildingCnt++;
        canDestroy = true;
      }
      if (canDestroy) {
        isDestroyed[eq.x][eq.y] = true;
        for (let j = 0; j < 4; j++) {
          let nx = eq.x + dx[j];
          let ny = eq.y + dy[j];
          if (!outOfBound(nx, ny) && map[nx][ny] !== OBSTACLE) {
            earthquakeCnt[nx][ny]++;
            queue.push(new Earthquake(nx, ny));
          }
        }
      }
    }
  }

  function outOfBound(x, y) {
    return !(x >= 0 && x < N && y >= 0 && y < M);
  }

  spreadEarthquake(rootEarthquake);

  return destroyedBuildingCnt + " " + (buildingCnt - destroyedBuildingCnt);
}

console.log(solution(input));
