function quad(array, size, countArray, start) {
  const first = array[start[0]][start[1]]; // 시작 지점의 값
  if (size === 1) {
    // size가 1이면 마지막이다. first 값에 따라서 countArray의 값을 증가시켜준다.
    first === 0 ? (countArray[0] += 1) : (countArray[1] += 1);
    return;
  }

  const half = size / 2; // 정사각형의 절반 가로, 세로 동일
  let keep = true;

  for (let i = start[0]; i < start[0] + size; i++) {
    for (let j = start[1]; j < start[1] + size; j++) {
      // 모든 값이 다 같은지 확인한다. 하나라도 다르면 keep을 false로 변경
      if (first !== array[i][j]) {
        keep = false;
        break;
      }
    }
    if (!keep) break;
  }
  // keep이 true일 경우 모두가 다 같다는 뜻이므로, 하나만 확인하여 증가시켜 주면 된다. 그리고 안에 더 확인할 필요가 없으니 return
  if (keep) {
    first === 0 ? countArray[0]++ : countArray[1]++;
    return;
  }
  // keep이 false 일 경우 4등분하여 다시 해주면 된다.
  quad(array, half, countArray, start);
  quad(array, half, countArray, [start[0], start[1] + half]);
  quad(array, half, countArray, [start[0] + half, start[1]]);
  quad(array, half, countArray, [start[0] + half, start[1] + half]);
  return;
}

function solution(arr) {
  const countArray = [0, 0];
  const size = arr.length;
  quad(arr, size, countArray, [0, 0]);
  return countArray;
}

const arr = [
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];

console.log(solution(arr));
