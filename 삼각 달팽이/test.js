function solution(n) {
  const answer = new Array(n).fill().map((_, i) => new Array(i + 1));

  let count = 0;
  let x = -1;
  let y = 0;
  while (n > 0) {
    for (let i = 0; i < n; i++) answer[++x][y] = ++count;
    for (let i = 0; i < n - 1; i++) answer[x][++y] = ++count;
    for (let i = 0; i < n - 2; i++) answer[--x][--y] = ++count;
    n -= 3;
  }

  return answer.flatMap((e) => e);
}

console.log(solution(4));
