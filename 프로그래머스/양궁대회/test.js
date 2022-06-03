function solution(n, info) {
  let max = 0;
  let answer = [-1];
  let lion = Array(11).fill(0);

  function DFS(level, count) {
    // 종료조건
    if (level == 10) {
      lion[level] = count;
      // 점수비교
      let sum = 0;
      for (let i = 0; i < 10; i++) {
        if (lion[i] > info[i]) {
          sum = sum + (10 - i);
        } else if (lion[i] === info[i]) {
          continue;
        } else {
          sum = sum - (10 - i);
        }
      }

      if (sum > max) {
        max = sum;
        answer = [...lion];
      } else if (sum == max) {
        // 낮은 개수를 더 맞추는 경우를 답으로 채용함
        for (let j = 10; j > 0; j--) {
          if (answer[j] == lion[j]) {
            continue;
          } else if (lion[j] > answer[j]) {
            answer = [...lion];
            break;
          } else {
            break;
          }
        }
      }
      // 계속진행
    } else {
      // 남은 화살개수가 없거나 + 어피차보다 많이 못맞출경우
      if (count == 0 || count < info[level] + 1) {
        DFS(level + 1, count);
      } else {
        // 어피치보다 많이 맞출경우
        lion[level] = info[level] + 1;
        count = count - (info[level] + 1);
        DFS(level + 1, count);

        // 다른 점수로 돌릴경우
        lion[level] = 0;
        count = count + (info[level] + 1);
        DFS(level + 1, count);
      }
    }
  }
  DFS(0, n);

  return answer;
}

const n = 5;
const arr = [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];

console.log(solution(n, arr));
