function solution(scores) {
  let answer = [];
  let firstSum = 0;
  let secondSum = 0;
  let hardProblem = -1;
  let index = 0;
  let arr = [];
  let setArr = [];

  for (let i = 0; i < scores.length; i++) {
    firstSum += scores[i][0];
    secondSum += scores[i][1];
  }
  if (firstSum > secondSum) hardProblem = 1;
  else if (firstSum < secondSum) hardProblem = 0;

  let list = scores.map((v, i) => ({
    id: i + 1,
    first: scores[i][0],
    second: scores[i][1],
    val: scores[i].reduce((a, c) => a + c),
  }));

  list.sort((a, b) => {
    if (a.val > b.val) return -1;
    if (a.val < b.val) return 1;
    if (a.val === b.val) return 0;
  });

  for (let i = 0; i < list.length; i++) {
    arr.push(list[i].val);
  }
  setArr = [...new Set(arr)].sort((a, b) => b - a);

  for (let i = 0; i < list.length; i++) {
    let count = arr.filter((v) => v === setArr[index]).length;
    if (count === 1) {
      answer.push(list[i].id);
      index++;
    } else {
      let tem = list.slice(i, i + count);
      i += count - 1;
      if (hardProblem === 0) {
        tem.sort((a, b) => {
          if (a.first > b.first) return -1;
          if (a.first < b.first) return 1;
          if (a.first === b.first) {
            if (a.id > b.id) return 1;
          }
        });
        for (let j = 0; j < tem.length; j++) {
          answer.push(tem[j].id);
        }
        index++;
      } else if (hardProblem === 1) {
        tem.sort((a, b) => {
          if (a.second > b.second) return -1;
          if (a.second < b.second) return 1;
          if (a.second === b.second) {
            if (a.id > b.id) return 1;
          }
        });
        for (let j = 0; j < tem.length; j++) {
          answer.push(tem[j].id);
        }
        index++;
      } else {
        tem.sort((a, b) => a.id - b.id);
        for (let j = 0; j < tem.length; j++) {
          answer.push(tem[j].id);
        }
        index++;
      }
    }
  }
  let ans = new Array(answer.length).fill(0);

  for (let i = 0; i < ans.length; i++) {
    ans[answer[i] - 1] = i + 1;
  }

  return ans;
}
const line = "64E2";

// "Q4OYPI"[(0, 0, 1, 0, 1, 1)];
// "RYI76"[(0, 0, 1, 1, 0)];
// "64E2"[(1, 1, 1, 0)];

console.log(solution(line));
