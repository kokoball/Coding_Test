function solution(n, money) {
  let dp = [1];
  for (let i = 0; i < n; ++i) dp.push(0);

  money.map((unit) => {
    dp[unit] += 1;
    for (let i = unit + 1; i <= n; ++i) {
      dp[i] += dp[i - unit];
    }
  });

  return dp[n];
}

const s = 5;
const money = [1, 2, 5];

console.log(solution(s, money));
