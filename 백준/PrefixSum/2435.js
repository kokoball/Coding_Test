const fs = require("fs");
const input = fs.readFileSync("../test.txt").toString().trim().split("\n");

function solution(arr) {
  const [arrLen, range] = arr[0].split(" ");
  const numArr = arr[1].split(" ");
  let answer = -Infinity;

  for (let i = 0; i < arrLen; i++) {
    let tempAnswer = 0;
    for (let j = 0; j < range; j++) {
      if (i + j >= arrLen) break;
      tempAnswer = tempAnswer + Number(numArr[i + j]);
    }
    if (tempAnswer > answer) answer = tempAnswer;
  }
  return answer;
}

console.log(solution(input));
