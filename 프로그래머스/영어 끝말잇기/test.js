function solution(n, words) {
  var fail_i = -1;
  for (var i = 1; i < words.length; i++) {
    var val = words[i];
    // 전단계의 끝말과 현단계 첫말이 다를 경우
    if (words[i - 1].slice(-1) != val.slice(0, 1)) {
      fail_i = i;
      break;
    }
    // indexOf 함수는 첫번째로 값이 맞는 인덱스만 반환하므로
    // 현재 인덱스와 맞지 않을 경우 중복된 값
    if (words.indexOf(val) != i) {
      fail_i = i;
      break;
    }
  }

  if (fail_i == -1) return [0, 0];

  var no = (fail_i % n) + 1;
  var turn = Math.floor(fail_i / n) + 1;

  return [no, turn];
}

const words = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];

console.log(solution(3, words));
