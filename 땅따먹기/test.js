function solution(land) {
  var answer = 0;

  return land.reduce(
    (a, c) => {
      return [
        c[0] + Math.max(a[1], a[2], a[3]),
        c[1] + Math.max(a[0], a[2], a[3]),
        c[2] + Math.max(a[0], a[1], a[3]),
        c[3] + Math.max(a[0], a[1], a[2]),
      ];
    },
    [0, 0, 0, 0]
  );
}

const arr = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];

console.log(solution(arr));
