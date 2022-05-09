function largestMagical(binString) {
  let answer = binString;
  let ansLength = answer.length;

  for (let k = 0; k < ansLength; k++) {
    for (let i = 0; i < ansLength; i++) {
      if (answer[i] === "0") continue;
      let l1 = -1,
        r1 = -1,
        l2 = -1,
        r2 = -1,
        sum = 0;
      for (let j = i; j < ansLength; j++) {
        if (answer[j] === "1") {
          if (l1 === -1) l1 = j;
          else if (r1 !== -1 && l2 === -1) l2 = j;
          sum++;
        } else {
          if (l1 === -1) continue;
          if (r1 !== -1 && l2 === -1) {
            (l1 = -1), (r1 = -1), (l2 = -1), (r2 = -1);
            continue;
          }
          sum--;
        }
        if (sum === 0) {
          if (l2 === -1) r1 = j;
          else {
            r2 = j;
            if (answer.slice(l1, r1 - l1) < answer.slice(l2, r2 - l2 + 1))
              break;
            else {
              (l1 = -1), (r1 = -1), (l2 = -1), (r2 = -1);
            }
          }
        }
      }
      if (l2 !== -1) {
        let tem;
        let n = answer.length;
        for (let i = 0; i < l1; i++) tem += answer[i];
        for (let i = l2; i <= r2; i++) tem += answer[i];
        for (let i = l1; i <= r1; i++) tem += answer[i];
        for (let i = r2 + 1; i < n; i++) tem += answer[i];
        answer = tem;
        k = 0;
        break;
      }
    }
  }

  let regex = /[^0-9]/g;
  answer = answer.replace(regex, "");

  return answer;
}

// console.log(largestMagical("11011000"));
// console.log(largestMagical("1100"));
// console.log(largestMagical("1101001100"));

console.log(largestMagical("11011000"));
console.log(largestMagical("1100"));
console.log(largestMagical("1101001100"));
