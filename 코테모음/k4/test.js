function solution(n, paths, gates, summits) {
  let x = countDfs(5, paths);
  return x;
}

function countDfs(n, arr) {
  let count = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from(
    {
      length: n + 1,
    },
    () => 0
  );
  let path = [];
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  function DFS(v) {
    if (v === n) {
      count++;
      console.log(path, 123);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  }

  path.push(1);
  DFS(1);
  return path;
}

let paths = [
  [1, 2, 3],
  [2, 3, 5],
  [2, 4, 2],
  [2, 5, 4],
  [3, 4, 4],
  [4, 5, 3],
  [4, 6, 1],
  [5, 6, 1],
];
let gates = [1, 3];
let summits = [5];

console.log(solution(6, paths, gates, summits));
