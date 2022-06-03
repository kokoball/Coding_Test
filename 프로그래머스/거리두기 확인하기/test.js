function solution(places) {
  let answer = [];

  const inBound = (val) => val >= 0 && val < 5;

  for (const place of places) {
    place.map((row, idx) => {
      place[idx] = row.split("");
    });

    const isPerson = (r, c) => place[r][c] === "P";
    const isEmpty = (r, c) => place[r][c] === "O";

    const keepRight = place.every((row, r) =>
      row.every((seat, c) => {
        if (seat === "P") {
          if (inBound(r + 1)) {
            if (isPerson(r + 1, c)) return false;
            if (isEmpty(r + 1, c)) {
              if (inBound(c + 1) && isPerson(r + 1, c + 1)) return false;
              if (inBound(c - 1) && isPerson(r + 1, c - 1)) return false;
              if (inBound(r + 2) && isPerson(r + 2, c)) return false;
            }
          }
          if (inBound(r - 1)) {
            if (isPerson(r - 1, c)) return false;
            if (isEmpty(r - 1, c)) {
              if (inBound(c + 1) && isPerson(r - 1, c + 1)) return false;
              if (inBound(c - 1) && isPerson(r - 1, c - 1)) return false;
              if (inBound(r - 2) && isPerson(r - 2, c)) return false;
            }
          }
          if (inBound(c + 1)) {
            if (isPerson(r, c + 1)) return false;
            if (isEmpty(r, c + 1) && inBound(c + 2) && isPerson(r, c + 2))
              return false;
          }
          if (inBound(c - 1)) {
            if (isPerson(r, c - 1)) return false;
            if (isEmpty(r, c - 1) && inBound(c - 2) && isPerson(r, c - 2))
              return false;
          }
        }
        return true;
      })
    );
    answer.push(keepRight ? 1 : 0);
  }

  return answer;
}

const places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];

console.log(solution(places));
