const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const str = input[0].split("");
  const answer = [];
  const obj = {};

  const setArr = (c) => {
    if (Object.keys(obj).includes(c)) {
      return obj[c];
    }

    const profixArr = [];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === c) count = count + 1;
      profixArr.push(count);
    }

    return (obj[c] = profixArr);
  };

  for (let i = 2; i < input.length; i++) {
    const [c, start, end] = input[i].split(" ");
    const nowArr = setArr(c);

    answer.push(nowArr[Number(end)] - (nowArr[Number(start) - 1] || 0));
  }

  return answer.join("\n");
}

console.log(solution(input));
