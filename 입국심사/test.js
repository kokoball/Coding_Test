const solution = (n, times) => {
  // 1명의 심사원이 1번에 1,000,000,000분, 대기인원 1,000,000,000인 경우
  const MAXTIME = 1000000000 * 1000000000;

  let front = 0;
  let rear = MAXTIME;
  while (front <= rear) {
    const mid = Math.floor((front + rear) / 2);

    // 특정 소요시간에서 몇명이 심사를 마치는지 확인
    let finished = 0;
    for (const ctime of times) {
      finished += Math.floor(mid / ctime);

      // 심사 마친 인원이 대기인원 보다 많아지면 loop 종료
      if (finished >= n) break;
    }

    // 심사 마친 인원이 대기인원 보다 많은 경우 down
    // 심사 마친 인원이 대기인원 보다 적거나 동일한 경우 up
    finished >= n ? (rear = mid - 1) : (front = mid + 1);
  }
  return front;
};
const arr = [7, 10];

console.log(solution(6, arr));
