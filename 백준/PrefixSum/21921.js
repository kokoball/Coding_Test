const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [len, count] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  const prefixSumArr = [];
  let startNum = 0;
  let maxNum = 0;
  let answerCount = 0;
  const answer = [];

  for (let j = 0; j < count; j++) {
    startNum += arr[j];
  }
  prefixSumArr.push(startNum);

  if (startNum > 0) {
    maxNum = startNum;
    answerCount = 1;
  }

  for (let i = 1; i < len - count + 1; i++) {
    const num = startNum - arr[i - 1] + arr[i + count - 1];
    prefixSumArr.push(num);

    if (num === maxNum) {
      answerCount++;
    }

    if (num > maxNum) {
      maxNum = num;
      answerCount = 1;
    }
    startNum = num;
  }

  answer.push(maxNum);
  answer.push(answerCount);

  if (maxNum < 1) return "SAD";
  return answer.join("\n");
}

console.log(solution(input));
