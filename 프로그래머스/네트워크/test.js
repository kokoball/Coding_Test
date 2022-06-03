function solution(n, computers) {
  var answer = 0;
  let tmp = Array.from({ length: 200 }, () => false); // 방문체크용 배열

  function dfs(start) {
    // 재귀함수
    tmp[start] = true; // 방문체크

    for (let i = 0; i < n; i++) {
      if (!tmp[i] && computers[start][i] === 1) {
        // 방문하지 않았고, 연결되어 있다면
        dfs(i); // 재귀적으로 탐색
      }
    }
  }

  for (let j = 0; j < n; j++) {
    // 컴퓨터 갯수만큼 탐색
    if (!tmp[j]) {
      // 방문을 하지 않았다면
      dfs(j); // 함수 실행
      answer++;
    }
  }

  return answer;
}

const arr = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

console.log(solution(3, arr));
