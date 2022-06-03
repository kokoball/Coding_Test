function solution(begin, end) {
  const arr = new Array(end - begin + 1).fill(0);

  for (let i = begin; i <= end; i++) {
    arr[i - begin] = getMaxDivisor(i);
  }

  if (begin === 1) arr[0] = 0;

  return arr;
}

const getMaxDivisor = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0 && n / i <= 1e7) {
      return n / i;
    }
  }
  return 1;
};

console.log(solution(1, 10));
