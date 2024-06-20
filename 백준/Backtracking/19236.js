// 다시 풀기

const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();
const info = input.split("\n").map((e) => e.split(" ").map(Number));
const direction = [, [-1, 0], [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1]];
const LEN = 4;

function solution(info) {
  let result = 0;
  let sharkPos = [0, 0];
  let sharkDirection;
  let map = [];
  let fishPos = Array(Math.pow(LEN, 2) + 1).fill(null);
  let fishDirection = Array(Math.pow(LEN, 2) + 1).fill(0);

  const getNextPos = (index, fishPos, fishDirection) => {
    const [y, x] = fishPos[index];
    let [dy, dx] = direction[fishDirection[index]];
    return [y + dy, x + dx];
  };

  const getNextDirection = (direction) => (direction + 1 > 8 ? 1 : direction + 1);
  const check = (y, x) => 0 <= y && y < LEN && 0 <= x && x < LEN;

  const swap = (a, b, map, fishPos) => {
    const [ay, ax] = fishPos[a];
    const [by, bx] = fishPos[b];

    map[ay][ax] = b;
    map[by][bx] = a;

    fishPos[a] = [by, bx];
    fishPos[b] = [ay, ax];
  };

  // init fishs
  for (let i = 0; i < LEN; i++) {
    const line = [];
    for (let j = 0; j < LEN; j++) {
      line.push(info[i][j * 2]);
      fishPos[info[i][j * 2]] = [i, j];
      fishDirection[info[i][j * 2]] = info[i][j * 2 + 1];
    }
    map.push(line);
  }

  // init shark
  const first = map[0][0];
  result = map[0][0];
  sharkDirection = fishDirection[map[0][0]];
  fishDirection[map[0][0]] = 0;
  map[0][0] = "s";

  // fish move
  const fishMove = (map, fishPos, fishDirection) => {
    const newMap = JSON.parse(JSON.stringify(map));
    const newFishPos = JSON.parse(JSON.stringify(fishPos));
    const newFishDirection = JSON.parse(JSON.stringify(fishDirection));
    for (let i = 1; i <= Math.pow(LEN, 2); i++) {
      if (newFishDirection[i] === 0) continue;
      let [ny, nx] = getNextPos(i, newFishPos, newFishDirection);

      while (1) {
        if (!check(ny, nx) || newMap[ny][nx] === "s") {
          newFishDirection[i] = getNextDirection(newFishDirection[i]);
          [ny, nx] = getNextPos(i, newFishPos, newFishDirection);
          continue;
        }
        break;
      }

      const nextIdx = newMap[ny][nx];
      if (nextIdx === 0) {
        const [ay, ax] = newFishPos[i];

        newMap[ay][ax] = 0;
        newMap[ny][nx] = i;

        newFishPos[i] = [ny, nx];
      } else {
        swap(i, nextIdx, newMap, newFishPos);
      }
    }
    return { newMap, newFishPos, newFishDirection };
  };

  const sharkMove = (sum, map, fishPos, fishDirection) => {
    result = Math.max(sum, result);
    const { newMap, newFishPos, newFishDirection } = fishMove(map, fishPos, fishDirection);
    const [y, x] = sharkPos;
    const [dy, dx] = direction[sharkDirection];
    const prevSharkDirection = sharkDirection;
    const prevSharkPos = sharkPos;
    let i = 0;
    while (1) {
      i++;
      const [ny, nx] = [dy * i + y, dx * i + x];
      if (!check(ny, nx)) break;
      if (newMap[ny][nx] === 0) continue;
      const prevFish = newMap[ny][nx];
      sharkPos = [ny, nx];
      sharkDirection = newFishDirection[prevFish];
      newFishDirection[prevFish] = 0;
      newMap[y][x] = 0;
      newMap[ny][nx] = "s";
      sharkMove(sum + prevFish, newMap, newFishPos, newFishDirection);
      newMap[ny][nx] = prevFish;
      newMap[y][x] = prevFish;
      newFishDirection[prevFish] = sharkDirection;
      sharkDirection = prevSharkDirection;
      sharkPos = prevSharkPos;
    }
  };

  sharkMove(first, map, fishPos, fishDirection);

  return result;
}
console.log(solution(info));
