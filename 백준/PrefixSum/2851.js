const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i])
    const nextSum = sum + Number(arr[i + 1]);
  
    if (Math.abs(100 - sum) < Math.abs(100 - nextSum)) {
        break
    }
  }
  return sum
}

console.log(solution(input));