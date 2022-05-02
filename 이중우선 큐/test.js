function solution(operations) {
  var answer = [];
  let maxNum, minNum;

  for (let i = 0; i < operations.length; i++) {
    const [keyword, num] = operations[i].split(" ");

    if (keyword === "I") {
      answer.push(+num);
      answer.sort((a, b) => a - b);
    } else {
      if (num === "1") answer.pop();
      else answer.shift();
    }
  }
  if (answer.length === 0) return [0, 0];
  maxNum = answer.pop();
  minNum = answer.shift();

  return [maxNum, minNum];
}

const operations = ["I 16", "D 1"];

console.log(solution(operations));
