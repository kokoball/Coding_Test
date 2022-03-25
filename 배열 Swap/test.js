function solution(numbers, K) {
  let answer = Infinity;
  let ansArr;
  let kArr = [];
  let firstCheck = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (Math.abs(numbers[i] - numbers[i - 1]) > K) firstCheck++;
  }
  if (firstCheck === 0) return 0;

  function getPermutation(arr, countNum) {
    const result = [];
    if (countNum === 1) return arr.map((x) => [x]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutation = getPermutation(rest, countNum - 1);
      const attached = permutation.map((x) => [fixed, ...x]);
      result.push(...attached);
    });
    return result;
  }
  ansArr = getPermutation(numbers, numbers.length);

  for (let i = 0; i < ansArr.length; i++) {
    let check = 0;
    for (let j = 1; j < ansArr[i].length; j++) {
      if (Math.abs(ansArr[i][j] - ansArr[i][j - 1]) > K) check++;
    }
    if (check === 0) kArr.push(ansArr[i]);
  }

  if (kArr.length === 0) return -1;

  for (let i = 0; i < kArr.length; i++) {
    let check = 0;
    for (let j = 0; j < kArr[i].length; j++) {
      if (numbers[j] !== kArr[i][j]) check++;
    }
    answer = Math.min(check, answer);
  }

  return answer - 1;
}

const arr = [10, 40, 30, 20];

console.log(getPermutations(arr, 20));
