function solution(gems) {
  const cnt = new Set(gems).size;
  const gemMap = new Map();
  var answer = [1, gems.length];
  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i);
    if (gemMap.size === cnt) {
      const cand = [gemMap.values().next().value + 1, i + 1];
      answer = answer[1] - answer[0] > cand[1] - cand[0] ? cand : answer;
    }
  });
  return answer;
}

const board = [
  "DIA",
  "RUBY",
  "RUBY",
  "DIA",
  "DIA",
  "EMERALD",
  "SAPPHIRE",
  "DIA",
];

console.log(solution(board));
