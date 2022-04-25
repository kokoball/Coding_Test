// 로그 시간 = 이진탐색 => 너무 시간이 길어서
// times -> 선형 로그 시간으로 충분히 가능!

// 우리는 특정 값을 찾는 것이 아니라 최소 몇 분에 심사가 끝나는지
// ㄴ 결정 문제 = 이진 탐색 = 파라메트릭 서치 (Parametric Search)

// 최소 1분에서 10억분  * n 사이에 답이 있음
// 면접관들이 몇 명을 처리하는가?
// 처리 가능한 입국자 n보다 작다면, 분을 올려야되고, 입국자가 n보다 크다면 분을 낮춰야한다.
// 면접관이 시간대비 몇 명을 처리할 수 있는가?

function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b); // O(n log n)
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // sum(시간 / 심사시간)
    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

    if (sum < n) left = mid + 1;
    else right = mid - 1;
  }

  return left;
}

const times = [7, 10];

console.log(solution(6, times));
