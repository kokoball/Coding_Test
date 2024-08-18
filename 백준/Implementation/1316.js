const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const set = new Set();
let count = +input[0];
for (let i = 1; i <= Number(input[0]); i++) {
  let str = input[i].split('');
  for (let j = 0; j < str.length; j++) {
    if (set.has(str[j])) {
      if (str[j] !== str[j - 1]) {
        count--;
        break;
      }
    } else {
      set.add(str[j]);
    }
  }
  set.clear();
}
console.log(count);