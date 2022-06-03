function solution(n, t, m, p) {
  let answer = "";
  // 문자열 str에 변환한 숫자를 문자열로 변환하여 붙인다
  // 이때 문자열 길이가 t * m 가 될때까지 변환 문자열을 더한다
  let str = "";
  let num = 0;
  while (str.length <= t * m) {
    str += num.toString(n).toUpperCase();
    num++;
  }

  // p 번째만 따로 뽑아서 출력한다
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (cnt === t) break;
    if (i % m === p - 1) {
      answer += str[i];
      cnt++;
    }
  }
  return answer;
}

console.log(solution(2, 4, 2, 1));
