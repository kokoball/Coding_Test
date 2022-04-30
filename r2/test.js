function smallestString(s) {
  let answer = "";
  let countB = 0;
  let cIndex = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a" || s[i] === "c") answer += s[i];
    else countB++;
  }

  cIndex = answer.indexOf("c");

  if (cIndex >= 0)
    return answer.slice(0, cIndex) + "b".repeat(countB) + answer.slice(cIndex);
  return answer + "b".repeat(countB);
}

const arr = "ababbaab";

console.log(smallestString(arr));
