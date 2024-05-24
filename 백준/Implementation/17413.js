const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const arr = input[0].split("");
  let tempArr = "";
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "<") {
      answer += tempArr.split("").reverse().join("");
      tempArr = "";

      let t = "<";
      let tempIndex = i + 1;
      while (1) {
        if (arr[tempIndex] !== ">") {
          t += arr[tempIndex];
          tempIndex++;
        } else break;
      }
      answer += t + ">";
      i = tempIndex;
      continue;
    }
    if (arr[i] !== "<" && arr[i] !== ">" && arr[i] !== " ") {
      tempArr += arr[i];
    } else if (arr[i] === " ") {
      answer += tempArr.split("").reverse().join("") + " ";
      tempArr = "";
    }
  }
  if (tempArr.length > 0) answer += tempArr.split("").reverse().join("");

  return answer;
}

console.log(solution(input));
