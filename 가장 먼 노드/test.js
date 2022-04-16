function solution(n, edge) {
  const connects = new Array(n).fill().map((_) => []);
  for (const e of edge) {
    connects[e[0] - 1].push(e[1] - 1);
    connects[e[1] - 1].push(e[0] - 1);
  }

  const visited = [1];
  const queue = [0];
  while (queue.length) {
    const cur = queue.shift();

    for (const next of connects[cur]) {
      if (!visited[next]) {
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }

  //   const max = Math.max(...visited);

  return visited;
}
const vertex = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

console.log(solution(6, vertex));
