function gcd(x, y) {
  if (y === 0) return x;
  else return gcd(y, x % y);
}

function solution(arr) {
  arr.reverse();

  for (var i = 0; i < arr.length - 1; i++) {
    var tt = (arr[i] * arr[i + 1]) / gcd(arr[i], arr[i + 1]);
    arr[i + 1] = tt;
  }

  return arr[arr.length - 1];
}

const arr = [2, 6, 8, 14];

console.log(solution(arr));
