const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim());

const set = new Set();

for (let j = -1; j >= -input[0].length; j--) {
  const arr = input.map((x) => x.slice(j));
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }

  if (set.size === input.length) {
    console.log(arr[0].length);
    break;
  }

  set.clear();
}
