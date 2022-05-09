function solution(atmos) {
  let answer = 0;
  let m = 0;
  let dayCount = 0;
  for (let i = 0; i < atmos.length; i++) {
    const [a, b] = atmos[i];

    if (a >= 151 && b >= 76) {
      if (m === 0) {
        answer++;
      }
      dayCount = 3;
    } else if (a >= 81 || b >= 36) {
      if (m === 0) {
        answer++;
        m = 1;
        dayCount = 0;
      } else if (m === 1 || m === 2) {
        m++;
      }
      dayCount++;
    } else if (m > 0) dayCount++;

    if (dayCount === 3) {
      m = 0;
      dayCount = 0;
    }
  }
  return answer;
}

const atmos = [
  [80, 35],
  [70, 38],
  [100, 41],
  [75, 30],
  [160, 80],
  [77, 29],
  [181, 68],
  [151, 76],
];
// const atmos = [
//   [140, 90],
//   [177, 75],
//   [95, 45],
//   [71, 31],
//   [150, 30],
//   [80, 35],
//   [72, 33],
//   [166, 81],
//   [151, 75],
// ];
console.log(solution(atmos));
