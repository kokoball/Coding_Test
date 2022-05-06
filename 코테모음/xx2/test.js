const solution = (S) => {
  let answer = S.slice(0, 2);

  for (let i = 2; i < S.length; i++) {
    if (S[i] !== S[i - 1] || S[i] !== S[i - 2]) {
      answer += S[i];
    }
  }
  return answer;
};

console.log(solution("xxxtxxx"));
