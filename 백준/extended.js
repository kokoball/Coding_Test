const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
// 정리
/* ex.
const x = Number(input[0]);
const [y, z] = input[1].split(' ').map(v => Number(v));
const arr = input[2].split(' '); 
*/
// 풀이
function solution(x, y, z, arr) {
  const answer = [];
  return answer.join('\n');
}

console.log(solution(x, y, z, arr));