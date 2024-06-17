const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  const [trueMemberLength, ...members] = input[1].split(" ").map(Number);
  const party = input.slice(2).map((l) => l.split(" ").slice(1).map(Number));
  const truthSet = new Set(members);

  for (let i = 0; i < n; i++) {
    party.forEach((p) => {
      const truthInParty = p.some((h) => truthSet.has(h));
      if (truthInParty) {
        p.forEach((h) => truthSet.add(h));
      }
    });
  }

  let count = 0;

  party.forEach((p) => {
    const truthInParty = p.some((h) => truthSet.has(h));
    if (!truthInParty) {
      count++;
    }
  });

  return count;
}

console.log(solution(input));
