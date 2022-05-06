function solution(S) {
  let answer = 0;
  let alphaList = {};

  for (let i = 0; i < S.length; i++) {
    let alpha = S[i];

    if (!alphaList[alpha]) alphaList[alpha] = true;
    else {
      alphaList = {};
      alphaList[alpha] = true;
      answer++;
    }
  }
  // return alphaList;
  return answer + 1;
}

console.log(solution("ttttxxx"));
