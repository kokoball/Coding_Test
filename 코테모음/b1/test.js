function solution(salaries, days) {
  let answer = 0;

  for (let i = 0; i < salaries.length; i++) {
    const [interval, single] = salaries[i];
    let num = Math.floor(days / interval);

    answer += num * single;
    if (num * interval !== days) answer += single;
  }
  return answer;
}

const line = "64E2";

// "Q4OYPI"[(0, 0, 1, 0, 1, 1)];
// "RYI76"[(0, 0, 1, 1, 0)];
// "64E2"[(1, 1, 1, 0)];

console.log(solution(line));
