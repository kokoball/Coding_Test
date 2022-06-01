// 최단거리는 BFS
function solution(maps) {
  // 1. 남동북서 기준
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  const row = maps.length;
  const col = maps[0].length;

  // 2. 방문 배열 초기화
  const visitCount = [...maps].map((r) => r.map((c) => 1));

  // 3. 시작점
  const queue = [[0, 0]];

  // 4. BFS
  while (queue.length) {
    const [y, x] = queue.shift();

    // 5. 남동서북 순으로 순회
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      // 6. 방문안한 배열, 전체 넓이 안
      if (ny >= 0 && nx >= 0 && ny < row && nx < col) {
        // 7. maps 1은 벽 없는 자리 && visitCount 처음 방문
        if (maps[ny][nx] === 1 && visitCount[ny][nx] === 1) {
          visitCount[ny][nx] = visitCount[y][x] + 1;
          queue.push([ny, nx]);
        }
      }
    }
  }

  return visitCount[row - 1][col - 1] === 1 ? -1 : visitCount[row - 1][col - 1];
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

console.log(solution(maps));
