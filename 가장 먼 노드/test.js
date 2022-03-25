function solution(n, edge) {
  // 노드 크기만큼의 2차원 배열을 선언하는 과정이다.
  const connects = new Array(n).fill().map((_) => []);

  for (const e of edge) {
    // 양방향 그래프이므로 서로의 좌표에 모두 연결된 노드를 넣어준다.
    // -1을 하는 이유는 배열의 index는 0부터 시작하는 반면
    // 주어진 노드 번호는 1부터 시작하기 때문이다.
    connects[e[0] - 1].push(el[1] - 1);
    connects[e[1] - 1].push(el[0] - 1);
  }

  const visited = [1]; // deps임과 동시에 반환값에 개수로 사용할 것이므로 바로 1로 시작하게끔 초기화
  const queue = [0];

  while (queue.length) {
    const cur = queue.shift();

    // 현재노드(cur)와 연결된 노드들을 돌아가며
    for (const next of connects[cur]) {
      // 연결된 노드 중 지금 차례의 노드(next)가
      // 아직 방문하지 않은 상태라면
      if (!visited[next]) {
        // 방문처리함과 동시에 그 값을 현재 deps + 1로 삽입
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }

  const max = Math.max(...visited);

  return visited.filter((el) => el === max).length;
}
const arr = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

console.log(solution(6, arr));
