const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

// 풀이
function solution(arr) {
  const [a, b] = arr[0].split(' ');
  return Number(a) + Number(b);
}

console.log(solution(input));