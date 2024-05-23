const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const N = input.shift().split("").map(Number)[0];
  let answer = 0;

  for (let i = 0; i < N; i++) {
    const arr = input[i].split("");
    const setArr = new Set(arr);
    const temp = [arr[0]];

    for (let j = 1; j < arr.length; j++) {
      if (arr[j] !== arr[j - 1]) temp.push(arr[j]);
    }
    if (temp.length === setArr.size) answer += 1;
  }

  return answer;
}

console.log(solution(input));
