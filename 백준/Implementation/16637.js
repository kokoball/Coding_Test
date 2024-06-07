// 재귀

const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const calc = (oper, a, b) => {
  if (oper === "+") {
    return a + b;
  } else if (oper === "-") {
    return a - b;
  } else {
    return a * b;
  }
};

function solution(input) {
  const N = input[0].split().map(Number)[0];
  const arr = input[1].split("");
  let ans = -Infinity;
  let nums = [];
  let opers = [];

  for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
      nums.push(Number(arr[i]));
    } else {
      opers.push(arr[i]);
    }
  }
  nums = nums.map((num) => Number(num));

  const check = (here, number) => {
    if (here === nums.length - 1) {
      ans = Math.max(ans, number);
      return;
    }
    check(here + 1, calc(opers[here], number, nums[here + 1]));
    if (here + 2 <= nums.length - 1) {
      const temp = calc(opers[here + 1], nums[here + 1], nums[here + 2]);
      check(here + 2, calc(opers[here], number, temp));
    }
  };
  check(0, nums[0]);

  return ans;
}

console.log(solution(input));
