const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const grid = Array.from({ length: 101 }, () => Array(101).fill(false));
  let totalArea = 0;

  input.forEach((rect) => {
    const [x1, y1, x2, y2] = rect.split(" ").map(Number);

    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        grid[x][y] = true;
      }
    }
  });

  // 격자 전체를 확인하여 true인 셀의 수를 카운트
  for (let x = 1; x <= 100; x++) {
    for (let y = 1; y <= 100; y++) {
      if (grid[x][y]) totalArea++;
    }
  }

  return totalArea;
}

console.log(solution(input));
