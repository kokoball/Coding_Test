// shift가 아닌 Queue로 구현
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  isEmpty() {
    return this.rear === this.front;
  }
}
// function solution(n, edge) {
//   // 노드 크기만큼 2차원 배열 생성
//   const graph = Array.from(Array(n + 1), () => []);

//   // 양방향 그래프이므로 서로의 좌표에 모두 연결된 노드를 넣어준다.
//   // -1을 하는 이유는 배열의 index는 0부터 시작하는 반면
//   // 주어진 노드 번호는 1부터 시작하기 때문이다.
//   for (const [src, dest] of edge) {
//     graph[src].push(dest);
//     graph[dest].push(src); // 양방향
//   }

//   const distance = Array(n + 1).fill(0);
//   distance[1] = 1;

//   const queue = new Queue();
//   queue.enqueue(1);
//   while (!queue.isEmpty()) {
//     const src = queue.dequeue();
//     for (const dest of graph[src]) {
//       if (distance[dest] === 0) {
//         queue.enqueue(dest);
//         distance[dest] = distance[src] + 1;
//       }
//     }
//   }

//   const max = Math.max(...distance);

//   return distance.filter((el) => el === max).length;
// }

function solution(n, edge) {
  // 노드 크기만큼 2차원 배열 생성
  const connects = new Array(n).fill().map((_) => []);

  // 양방향 그래프이므로 서로의 좌표에 모두 연결된 노드를 넣어준다.
  // -1을 하는 이유는 배열의 index는 0부터 시작하는 반면
  // 주어진 노드 번호는 1부터 시작하기 때문이다.
  for (const [src, dest] of edge) {
    connects[src - 1].push(dest - 1);
    connects[dest - 1].push(src - 1); // 양방향
  }

  const visited = [1]; // BFS 임과 동시에 반환값에 개수로 사용할 것이므로 바로 1로 시작하게끔 초기화
  const queue = [0];
  while (queue.length) {
    const cur = queue.shift(); // shift는 O(n) 이지만 요소가 작을때에는 js 엔진에서 최적화를 해준다.

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
