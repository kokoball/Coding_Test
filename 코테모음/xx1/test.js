// function solution(N, K) {
//   let answer = N + "";
//   let num = 0;
//   let K = K;
//   let index = 0;

//   for (;;) {
//     if (K < 1) break;
//     let temNum = answer[index];

//     if (temNum === "9") index++;
//     else {
//       if (index === 0) num = Number(temNum) + 1 + answer.slice(1);
//       else if (index === 1)
//         num = answer[0] + (Number(temNum) + 1) + answer[2];
//       else num = answer.slice(0, 2) + (Number(temNum) + 1);

//       answer = num;
//       K--;
//     }
//   }

//   return num;
// }

function solution(N, K) {
  let answer = N + "";
  let index = 0;

  while (K > 0) {
    let temNum = answer[index];
    let num = 0;
    if (answer === "999") return 999;

    if (temNum === "9") index++;
    else {
      if (index === 0) num = Number(temNum) + 1 + answer.slice(1);
      else if (index === 1) num = answer[0] + (Number(temNum) + 1) + answer[2];
      else num = answer.slice(0, 2) + (Number(temNum) + 1);

      answer = num;
      K--;
    }
  }

  return answer;
}

console.log(solution(495, 444));
