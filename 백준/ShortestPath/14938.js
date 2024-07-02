const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M, R] = input[0].split(" ").map(Number);
  const items = [0, ...input[1].split(" ").map(Number)];
  const graph = Array.from(Array(N + 1)).map(() => []);
  const lines = input.slice(2).map((v) => v.split(" ").map(Number));
  let answer = 0;

  lines.map(([from, to, value]) => {
    graph[from].push([to, value]);
    graph[to].push([from, value]);
  });

  const bfs = (start) => {
    const info = new Array(N + 1).fill(Infinity);
    const queue = [];

    queue.push([start, 0]);
    info[start] = 0;

    while (queue.length) {
      const [node, linkedValue] = queue.shift();

      const nextNodes = graph[node];

      for (let i = 0; i < nextNodes.length; i++) {
        const [nextNode, nextLinkedValue] = nextNodes[i];
        const totalLinkedValue = linkedValue + nextLinkedValue;

        if (info[nextNode] < totalLinkedValue || totalLinkedValue > M) continue;

        queue.push([nextNode, totalLinkedValue]);
        info[nextNode] = totalLinkedValue;
      }
    }

    return info
      .map((item, index) => {
        if (item === Infinity) return 0;
        return items[index];
      })
      .reduce((a, b) => a + b);
  }
  const results = [];
  for (let i = 1; i <= N; i++) {
    results.push(bfs(i));
  }

  return (Math.max(...results))

}

console.log(solution(input));
