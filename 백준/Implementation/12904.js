const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
let a = input[0].trim().split("");
let b = input[1].trim().split("");
let answer = 0;
  
while (1) {
  if (a.length === b.length) {
    if (isSameArray(a, b)) answer = 1;
    break;
  }
  if (b[b.length - 1] === "A") b.pop();
  else {
    b.pop();
    b.reverse();
  }
}
  
function isSameArray(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
    else continue;
  }
  return true;
}
  
  return answer;
}

console.log(solution(input));
