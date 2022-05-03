function solution(N, number) {
  const cache = new Array(9).fill(0).map((el) => new Set());
  for (let i = 1; i < 9; i++) {
    cache[i].add("1".repeat(i) * N);
    for (let j = 1; j < i; j++) {
      for (const arg1 of cache[j]) {
        for (const arg2 of cache[i - j]) {
          cache[i].add(arg1 + arg2);
          cache[i].add(arg1 - arg2);
          cache[i].add(arg1 * arg2);
          cache[i].add(arg1 / arg2);
        }
      }
    }
    if (cache[i].has(number)) return i;
  }
  return -1;
}

console.log(solution(5, 12));
