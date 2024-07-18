const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(num) {
  const memo = [...Array(n + 1)].fill(-1);
  memo[1] = 1;
  memo[2] = 3;

  function dp(n) {
    if (n < 3 || memo[n] !== -1) {
      return memo[n] % 10007;
    }

    memo[n] = dp(n - 1) + 2 * dp(n - 2);
    return memo[n];
  }

  dp(num);

  return memo[num];
}

console.log(solution(input));
