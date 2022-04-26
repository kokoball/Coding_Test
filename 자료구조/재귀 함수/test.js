// 합병 정렬 구현
// 결합
const merge = (a, b) => {
  if (a.length === 0) return b;
  else if (b.length === 0) return a;
  else if (a[0] < b[0]) return [a[0], ...merge(a.slice(1), b)];
  else return [b[0], ...merge(a, b.slice(1))];
};

// 분해
const mergesort = (arr) => {
  if (arr.length < 2) return arr;
  else {
    const mid = Math.floor(arr.length / 2);
    return merge(mergesort(arr.slice(0, mid)), mergesort(arr.slice(mid)));
  }
};

console.log(mergesort([21, 10, 12, 20, 25, 13, 15, 22]));
