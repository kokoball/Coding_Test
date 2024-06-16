// 크루스칼 알고리즘을 활요해 MST(최소스패닝트리)를 생성하는 문제
// Union-find 알고리즘을 활용해 집합을 대표하는 원소 변경과 사이클을 생성하지 않으면서 MST 를 생성
// 간선 가중치 최소값 구하기

const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = +input[0];
  const M = +input[1];
  const costs = input.slice(2).map((v) => v.split(" ").map(Number));
  const COST = 2;
  costs.sort((a, b) => a[COST] - b[COST]);

  class DisjointSet {
    constructor(n) {
      this.parent = Array.from({ length: n + 1 }, (_, i) => i);
    }

    union(n1, n2) {
      const rootA = this.find(n1);
      const rootB = this.find(n2);
      if (rootA < rootB) this.parent[rootB] = rootA;
      else this.parent[rootA] = rootB;
    }

    find(node) {
      if (this.parent[node] === node) return node;
      this.parent[node] = this.find(this.parent[node]);

      return this.parent[node];
    }

    connected(n1, n2) {
      if (this.find(n1) != this.find(n2)) return false;
      else return true;
    }
  }

  const disjointSet = new DisjointSet(N);
  let answer = 0;

  for (let i = 0; i < costs.length; i++) {
    const [from, to, cost] = costs[i];
    if (!disjointSet.connected(from, to)) {
      disjointSet.union(from, to);
      answer += cost;
    }
  }
  return answer;
}

console.log(solution(input));
