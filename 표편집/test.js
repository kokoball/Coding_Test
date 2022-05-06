// double linked list
// 더블 링크드 리스트

const Node = function (idx, prevNode) {
  this.idx = idx;
  this.prev = prevNode;
  this.next;
};

function solution(n, k, cmd) {
  // answer 배열 생성(모든 값이 'O'인 배열)
  let answer = new Array(n);
  for (let i = 0; i < n; i++) {
    answer[i] = "O";
  }

  // 쌍방향 노드 리스트 생성
  let root = new Node(0);
  let curNode = root;
  let prevNode = root;

  // cmd에 대해 반복문을 통한 처리
  // (curNode: 현재 노드, prev: 이전 노드, next: 다음 노드, history: 기록 배열)
  for (let i = 1; i < n; i++) {
    const newNode = new Node(i, prevNode);
    prevNode.next = newNode;
    prevNode = newNode;

    if (i === k) {
      curNode = newNode;
    }
  }

  const history = [];
  cmd.map((commandLine) => {
    const [command, count] = commandLine.split(" ");
    let i = 0;
    switch (command) {
      // 'U': count 만큼 이동하며 curNode를 prev로 바꿔줌
      case "U":
        while (i < count && curNode.prev) {
          curNode = curNode.prev;
          i++;
        }
        break;
      // 'D': count 만큼 이동하며 curNode를 next로 바꿔줌
      case "D":
        while (i < count && curNode.next) {
          curNode = curNode.next;
          i++;
        }
        break;
      // 'C': curNode를 history에 넣고, prev와 next를 상호 연결시켜주고, curNode를 prev 또는 next로 변경
      case "C":
        history.push(curNode);
        const prev = curNode.prev;
        const next = curNode.next;
        if (prev && next) {
          prev.next = next;
          next.prev = prev;
          curNode = next;
        } else if (prev) {
          prev.next = null;
          curNode = prev;
        } else if (next) {
          next.prev = null;
          curNode = next;
        }
        break;
      // 'Z': 가장 마지막 history를 pop하고, pop한 노드의 prev와 next를 다시 자신에 맞게 연결
      case "Z":
        const node = history.pop();
        const prevNode = node.prev;
        const nextNode = node.next;
        if (prevNode) {
          prevNode.next = node;
        }
        if (nextNode) {
          nextNode.prev = node;
        }
        break;
    }
  });

  // history에 남아있는 노드들은 제거된 노드들이므로, answer 배열에서 해당 idx값 'X'로 변경
  history.map((node) => {
    answer[node.idx] = "X";
  });
  return answer.join("");
}

const arr = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"];

console.log(solution(8, 2, arr));
