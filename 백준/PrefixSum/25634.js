const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = input.shift().split(" ").map(Number);
  const [arr, status] = input.map((x) => x.split(" ").map(Number));

  let max = -5001;
  let min = 5001;
  let sum = 0;
  let haps = 0;

  for (let i = 0; i < arr.length; i++) {
    let lumen = arr[i] * (status[i] === 0 ? +1 : -1);
    min = Math.min(min, -lumen);
    haps = haps + lumen;
    if (haps < 0) haps = 0;
    max = Math.max(max, haps);
    sum += lumen < 0 ? -lumen : 0;
  }

  return max === 0 ? sum + max - min : sum + max;
}

console.log(solution(input));
