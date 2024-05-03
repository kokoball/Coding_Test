const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const [_len, height] = input.shift().split(" ").map(Number);
  const answer = [];

  const bottom = Array.from({ length: height + 1 }, () => 0);
  const top = Array.from({ length: height + 1 }, () => 0);

  input.forEach((v, idx) => {
    idx % 2 === 0 ? bottom[parseInt(v)]++ : top[height - parseInt(v) + 1]++;
  });

  for (let i = 1; i <= height; i++) {
    top[i] += top[i - 1];
    bottom[height - i] += bottom[height - i + 1];
  }

  let min = Infinity;
  let cnt = 0;

  for (let i = 1; i <= height; i++) {
    if (top[i] + bottom[i] < min) {
      cnt = 1;
      min = top[i] + bottom[i];
    } else if (top[i] + bottom[i] === min) {
      cnt++;
    }
  }
  answer.push(min);
  answer.push(cnt);

  return answer.join(" ");
}

console.log(solution(input));
