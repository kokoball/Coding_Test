function solution(begin, target, words) {
  const visited = { [begin]: 0 }; // 방문여부를 저장할 변수 선언
  const queue = [begin]; // BFS를 돌기 위한 queue 선언

  // 첫 시작 노드로 queue와 visited를 초기화한다

  // BFS 탐색 시작
  while (queue.length) {
    const cur = queue.shift();

    // target과 일치한 경우 반복을 종료한다.
    if (cur === target) break;

    for (const word of words) {
      if (isConnected(cur, word) && !visited[word]) {
        // 이 부분이 핵심이다. 연결은 되어있지만 아직 방문하지 않은 경우라면,
        // 방문여부를 활성화하는데 이때 현재 deps 값을 넣어준다.
        // 위에서 설명했듯 현재 deps는 이전 deps + 1 이다.
        visited[word] = visited[cur] + 1;
        queue.push(word);
      }
    }
  }
  return visited[target] ? visited[target] : 0;
}

const isConnected = (str1, str2) => {
  let count = 0;
  const len = str1.length;

  for (let i = 0; i < len; i++) {
    if (str1[i] !== str2[i]) count++;
  }

  return count === 1 ? true : false;
};

const arr = [7, 4, 5, 6];

console.log(solution(2, 10, arr));
