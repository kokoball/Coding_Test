function solution(arr) {
  const operandsCount = Math.ceil(arr.length / 2);
  const max_dp = new Array(operandsCount)
    .fill()
    .map((_) => new Array(operandsCount).fill(-Infinity));
  const min_dp = new Array(operandsCount)
    .fill()
    .map((_) => new Array(operandsCount).fill(Infinity));

  for (let i = 0; i < operandsCount; i++) {
    max_dp[i][i] = +arr[i * 2];
    min_dp[i][i] = +arr[i * 2];
  }

  for (let cnt = 1; cnt < operandsCount; cnt++) {
    for (let i = 0; i < operandsCount - cnt; i++) {
      const j = i + cnt;
      for (let k = i; k < j; k++) {
        if (arr[k * 2 + 1] === "+") {
          max_dp[i][j] = Math.max(
            max_dp[i][j],
            max_dp[i][k] + max_dp[k + 1][j]
          );
          min_dp[i][j] = Math.min(
            min_dp[i][j],
            min_dp[i][k] + min_dp[k + 1][j]
          );
        } else {
          max_dp[i][j] = Math.max(
            max_dp[i][j],
            max_dp[i][k] - min_dp[k + 1][j]
          );
          min_dp[i][j] = Math.min(
            min_dp[i][j],
            min_dp[i][k] - max_dp[k + 1][j]
          );
        }
      }
    }
  }

  return max_dp[0][operandsCount - 1];
}

const arr = ["1", "-", "3", "+", "5", "-", "8"];

console.log(solution(arr));
