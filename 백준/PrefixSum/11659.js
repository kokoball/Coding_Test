const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const arr = input[1].split(" ").map(Number);
  const cumulativeSumArray = arr.reduce((acc, current, index) => {
    if (index === 0) {
      acc.push(current);
    } else {
      acc.push(acc[index - 1] + current);
    }
    return acc;
  }, []);
  const answer = [];

  for (let i = 2; i < input.length; i++) {
    const [start, end] = input[i].split(" ");
    answer.push(cumulativeSumArray[end - 1] - (cumulativeSumArray[start - 1 - 1] || 0));
  }

  return answer.join("\n");
}

console.log(solution(input));
