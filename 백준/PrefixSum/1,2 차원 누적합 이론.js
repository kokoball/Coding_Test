// https://jih3508.tistory.com/50 참고
// 1차원 배열
// 누적합은 0번째 인덱스 부터 N 번째 인덱스까지 탐색하면서 인덱스 i일때 0번째 인덱스 부터 0번째 인덱스합

let array = [1, 8, 7, 4, 3, 5, 6];
let n = array.length;
let prefix_sum = new Array(n + 1).fill(0);

for (let i = 0; i < n; i++) {
  prefix_sum[i + 1] = prefix_sum[i] + array[i];
}

// 몇번째 인덱스 까지 합친것을 부를 때 index 위치에 있는 값만 부르면 된다.
// 1차원에서 구간합은 그냥 누적합에서 빼면 됨

// 2차원 배열은 좀 복잡
// 0행, 0열은 그냥 계산, 그 이후에는 위 + 아래 - 왼쪽 위
// 2.2 계산 => 3 + 6 + 6 - 1

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let size = matrix.length;

let prefix_sum_2 = new Array(size + 1);
for (let i = 0; i <= size; i++) {
  prefix_sum_2[i] = new Array(size + 1).fill(0);
}

for (let i = 1; i <= size; i++) {
  for (let j = 1; j <= size; j++) {
    prefix_sum_2[i][j] =
      matrix[i - 1][j - 1] +
      prefix_sum_2[i - 1][j] +
      prefix_sum_2[i][j - 1] -
      prefix_sum_2[i - 1][j - 1];
  }
}
const result_2 = [
  [0, 0, 0, 0, 0],
  [0, 1, 3, 6, 10],
  [0, 6, 14, 24, 36],
  [0, 15, 33, 54, 78],
  [0, 28, 60, 96, 136],
];

// 2차원 배열 구간합은  Range(x1, y1, x2, y2) = S(x2, y2) - S(x2, y1 -1) - S(x1 - 1, y2) + S(x1 - 1 , y1 -1)
// 1차원 배열일때 x1 ~ x2의 구간합은 x2의 누적합과 x1 - 1의 누적합의 빼면 됬다. 2차원 배열은 1차원 배열에서 합집합의 개념을 추가 했다고 보면 된다.

let matrix_3 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let size_3 = matrix.length;

let prefix_sum_3 = new Array(size + 1);

for (let i = 0; i <= size; i++) {
  prefix_sum_3[i] = new Array(size + 1).fill(0);
}

for (let i = 1; i <= size_3; i++) {
  for (let j = 1; j <= size_3; j++) {
    prefix_sum_3[i][j] =
      matrix_3[i - 1][j - 1] +
      prefix_sum_3[i - 1][j] +
      prefix_sum_3[i][j - 1] -
      prefix_sum_3[i - 1][j - 1];
  }
}

let x1 = 2,
  y1 = 1,
  x2 = 3,
  y2 = 4;
let Range_value =
  prefix_sum_3[x2][y2] +
  prefix_sum_3[x1 - 1][y1 - 1] -
  prefix_sum_3[x2][y1 - 1] -
  prefix_sum_3[x1 - 1][y2];

// 68

console.log(Range_value);

// 배열을 만들땐 push 보다는 전체 배열을 만들고 누적합 배열 구하기
const prefixSum = new Array(N + 1).fill(0);
const answer = new Array(Q).fill(0);

for (let i = 1; i <= N; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
}
