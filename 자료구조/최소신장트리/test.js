//다익스트라 알고리즘 구현

// 먼저 힙을 생성
// 각 정점에 대한 최단 거리를 저장할 배열을 무한대로 초기화
// 힙에 시작점을 추가
// 힙이 비어있지 않을 때 까지 루프
// 선택된 정점에서 갈 수 있는 정점을 찾고
// 더 짧은 경로라면 값을 갱신
// 루프가 종료되면 최단 거리 배열을 반환

function dijkstra(road, N) {
  const heap = new MinHeap(); // 우선순위 큐(힙)
  heap.push({ node: 1, cost: 0 }); // 1번 마을부터 시작

  const dist = [...Array(N + 1)].map(() => Infinity); // 계산하기 편하도록 N+1 길이만큼 리스트 생성
  dist[1] = 0; // 1번 마을은 무조건 거리가 0

  while (!heap.isEmpty()) {
    // heap이 비어있지 않다면
    // cost가 가장 낮은 정점을 뽑는다.
    const { node: current, cost: currentCost } = heap.pop();

    for (const [src, dest, cost] of road) {
      // 루프를 돌며 시작점, 도착점, 비용을 꺼낸다
      const nextCost = cost + currentCost; // 비용

      // 양방향을 고려하여 작성
      if (src === current && nextCost < dist[dest]) {
        // src가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
        dist[dest] = nextCost; // 거리를 갱신한다.
        heap.push({ node: dest, cost: nextCost }); // push
      } else if (dest == current && nextCost < dist[src]) {
        // dest가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
        dist[src] = nextCost; // 거리를 갱신한다.
        heap.push({ node: src, cost: nextCost }); // push
      }
    }
  }

  return dist; // 1번 마을부터 각 마을까지의 최단 거리
}
