function getDistance(start, target) {
  let sum = 0;
  // 거리는 행 인덱스 차이 + 열 인덱스 차이이므로 각각 구해 더해준다.
  // 예를 들어, [1, 0]에서 [3, 3]까지의 거리는 (3-1) + (3-0) = 5이다.
  sum += Math.max(start[0], target[0]) - Math.min(start[0], target[0]);
  sum += Math.max(start[1], target[1]) - Math.min(start[1], target[1]);
  return sum;
}

function solution(line) {
  let answer = [];

  const keys = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [0, 3],
    5: [0, 4],
    6: [0, 5],
    7: [0, 6],
    8: [0, 7],
    9: [0, 8],
    0: [0, 9],
    Q: [1, 0],
    W: [1, 1],
    E: [1, 2],
    R: [1, 3],
    T: [1, 4],
    Y: [1, 5],
    U: [1, 6],
    I: [1, 7],
    O: [1, 8],
    P: [1, 9],
  };

  const left = [1, 2, 3, 4, 5, "Q", "W", "E", "R", "T"];
  const right = [6, 7, 8, 9, 0, "Y", "U", "I", "O", "P"];

  let leftHand = keys["Q"];
  let rightHand = keys["P"];

  for (let i = 0; i < line.length; i++) {
    const target = line[i];

    const leftDistance = getDistance(leftHand, keys[target]);
    const rightDistance = getDistance(rightHand, keys[target]);

    // 왼손과 오른손의 거리가 같다면
    if (leftDistance < rightDistance) {
      answer.push(0);
      leftHand = keys[target];
    } else if (leftDistance > rightDistance) {
      answer.push(1);
      rightHand = keys[target];
    } else if (leftDistance === rightDistance) {
      if (left.indexOf(target) !== -1) {
        answer.push(0);
        leftHand = keys[target];
      } else {
        answer.push(1);
        rightHand = keys[target];
      }
    }
  }

  return answer;
}

const line = "64E2";

// "Q4OYPI"[(0, 0, 1, 0, 1, 1)];
// "RYI76"[(0, 0, 1, 1, 0)];
// "64E2"[(1, 1, 1, 0)];

console.log(solution(line));
