function solution(A) {
  let hills = 0;
  let valley = 0;
  let checkNum = 0;

  for (let i = 0; i < A.length; i++) {
    checkNum = i + 1;

    if (i === 0) {
      if (A[i] < 0) valley++;
      else if (0 < A[i]) hills++;
      continue;
    }

    if (checkNum === A.length - 1) {
      if (A[checkNum - 1] > 0) hills++;
      else if (A[checkNum - 1] < 0) valley++;
      continue;
    }

    if (i > 0 && checkNum < A.length - 1) {
      if (A[i - 1] < A[i] && A[checkNum + 1] < A[checkNum]) hills++;
      else if (A[i - 1] > A[i] && A[checkNum + 1] > A[checkNum]) valley++;
    }
  }

  return hills + valley;
}

const A = [2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5];
const B = [-3, 3, 3];

console.log(solution(B));
