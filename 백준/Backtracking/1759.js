// 백트랙킹 순서 유지, 중복 없음
const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const arr = input
    .slice(1)
    .map((str) => str.split(" "))[0]
    .sort();
  const answer = [];

  const checkCharacter = (str) => {
    let vowel = 0;
    let consonant = 0;

    for (let s of str) {
      if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u") {
        vowel++;
      } else {
        consonant++;
      }
    }

    if (vowel >= 1 && consonant >= 2) return true;
    return false;
  };

  function DFS(L, str) {
    if (str.length === N) {
      if (checkCharacter(str)) answer.push(str);
      return;
    }
    for (let i = L; i < M; i++) {
      DFS(i + 1, str + arr[i]);
    }
  }

  DFS(0, "");

  return answer.join("\n");
}

console.log(solution(input));
