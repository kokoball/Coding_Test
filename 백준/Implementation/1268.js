const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const n = Number(input[0]);
  const array = Array.from({ length: n }, () => Array(n).fill(0));
  const newArr = [];
  
  for (let i = 0; i < n; i++) {
    newArr.push(input[i].split(" ").map((el) => Number(el)));
  }
  
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (newArr[j][i] === newArr[k][i]) {
          array[k][j] = 1;
          array[j][k] = 1;
        }
      }
    }
  }

  console.log(array, 90909);
  
  const cnt = array.map((el) => el.filter((element) => element === 1).length);

  console.log(cnt, 2)

  return cnt.indexOf(Math.max(...cnt)) + 1;
}

console.log(solution(input));

