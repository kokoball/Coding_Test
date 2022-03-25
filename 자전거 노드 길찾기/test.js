function solution(n, k, roads) {
  let answer = [];
  let tem = "";

  function DFS(node, time, xxx) {
    if (time > k) return;
    if (time === k) answer.push(xxx);

    for (let i = 0; i < roads.length; i++) {
      if (!roads[i].includes(node)) continue;
      if (roads[i].indexOf(node) === 2) continue;
      if (roads[i].indexOf(node) === 0)
        DFS(roads[i][1], time + roads[i][2], roads[i][1]);
      if (roads[i].indexOf(node) === 1)
        DFS(roads[i][0], time + roads[i][2], roads[i][0]);
    }
  }
  DFS(0, 0, tem);
  if (answer.length === 0) return [-1];

  answer = [...new Set(answer)].sort((a, b) => a - b);

  return answer;
}

const roads = [
  [5, 4, 6],
  [5, 2, 5],
  [0, 4, 2],
  [2, 3, 3],
  [1, 2, 7],
  [0, 1, 3],
];

console.log(solution(6, 17, roads), 1111111111);
// console.log(roads[2].indexOf(0));
