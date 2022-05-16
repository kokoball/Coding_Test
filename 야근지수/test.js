function solution(n, works) {
  if (works.reduce((a, b) => a + b) <= n) return 0;

  let sorted = works.sort((a, b) => a - b);
  const len = works.length;

  while (n) {
    // 현재 최대값을 지정한다.
    // 아래의 반복문으로 인해 재정렬 없이
    // 현재 최대값은 항상 마지막 인덱스에 위치한다.
    const max = sorted[len - 1];

    // 마지막 원소부터 앞으로 가며
    // 현재 최대값 이상인 값이 있다면 제거해준다.
    // 따라서 현재 최대값은 계속 마지막 위치에 있을 수 있다.
    for (let i = len - 1; i >= 0; i--) {
      if (sorted[i] >= max) {
        sorted[i]--;
        n--;
      }
      // 주어진 시간을 다 쓴 경우엔 반복문 탈출
      if (!n) break;
    }
  }
  // 처리해야할 총 작업량보다 근무시간이 같거나 크다면
  // 모든 일을 처리할 수 있기에 피로도가 없다.
  if (works.reduce((a, b) => a + b) <= n) return 0;

  return sorted.reduce((a, b) => a + Math.pow(b, 2), 0);
}

const n = 4;
const works = [4, 3, 3];

console.log(solution(n, works));
