const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, T] = input.shift().split(" ").map(Number);
  const arr = new Array(100001).fill(0);

  let index = 0;

  for (let i = 0; i < N; i++) {
    const num = input[index].split(" ").map(Number)[0];

    for (let j = 1; j <= num; j++) {
      const [start, end] = input[index + j].split(" ").map(Number);
      arr[start] = arr[start] + 1;
      arr[end] = arr[end] - 1;
    }

    index += num + 1;
  }

  const prefixSum = removeTrailingZeros(arr);
  const sumArr = new Array(prefixSum.length).fill(0);

  // 스위핑
  // 1 ~ 6 일때 1, -1 각각 추가
  for (let i = 1; i < prefixSum.length; i++) {
    prefixSum[i] += prefixSum[i - 1];
    sumArr[i] += sumArr[i - 1] + prefixSum[i];
  }

  let tmp = sumArr[T - 1];
  let ans1 = 0;
  let ans2 = T;
  for (let i = 1; i <= sumArr.length - T; i++) {
    if (sumArr[i + T - 1] - sumArr[i - 1] > tmp) {
      ans1 = i;
      ans2 = i + T;
    }
    tmp = Math.max(sumArr[i + T - 1] - sumArr[i - 1], tmp);
  }

  return `${ans1} ${ans2}`;
}

function removeTrailingZeros(arr) {
  let lastIndex = arr.length - 1;
  while (lastIndex >= 0 && arr[lastIndex] === 0) {
    lastIndex--;
  }
  return arr.slice(0, lastIndex + 1);
}

console.log(solution(input));
