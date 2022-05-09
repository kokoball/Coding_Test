function solution(board) {
  let answer = [];
  let len = board.length;

  function inBound(v) {
    return v >= 0 && v < len;
  }

  function checkArr(c, j, i, colBoard) {
    let list = [];
    if (inBound(j + 1)) {
      if (colBoard[j + 1][i] === c) {
        list.push([j + 1, i]);
      }
    }
    if (inBound(j - 1)) {
      if (colBoard[j - 1][i] === c) {
        list.push([j - 1, i]);
      }
    }
    if (inBound(i + 1)) {
      if (colBoard[j][i + 1] === c) {
        list.push([j, i + 1]);
      }
    }
    if (inBound(i - 1)) {
      if (colBoard[j][i - 1] === c) {
        list.push([j, i - 1]);
      }
    }
    colBoard[j][i] = "0";
    if (list.length === 0) return [];
    return list;
  }

  for (let i = 0; i < len; i++) {
    let colBoard = [];
    for (let i = 0; i < len; i++) {
      colBoard.push(board[i].split(""));
    }

    for (let j = 0; j < len; j++) {
      if (colBoard[j][i] === "0") continue;

      let vList;
      let c = colBoard[j][i];

      vList = checkArr(c, j, i, colBoard);

      while (vList.length) {
        let indexNum = vList.shift();
        let newList = checkArr(c, indexNum[0], indexNum[1], colBoard);
        if (newList) {
          for (let k = 0; k < newList.length; k++) {
            vList.push(newList[k]);
          }
        }
      }
    }
    let t = colBoard.flat().filter((v) => v === "0").length;
    answer.push(t);
  }

  for (let i = 0; i < len; i++) {
    let colBoard = [];
    for (let i = 0; i < len; i++) {
      colBoard.push(board[i].split(""));
    }

    for (let j = 0; j < len; j++) {
      if (colBoard[i][j] === "0") continue;

      let vList;
      let c = colBoard[i][j];

      vList = checkArr(c, i, j, colBoard);

      while (vList.length) {
        let indexNum = vList.shift();
        let newList = checkArr(c, indexNum[0], indexNum[1], colBoard);
        if (newList) {
          for (let k = 0; k < newList.length; k++) {
            vList.push(newList[k]);
          }
        }
      }
    }
    let t = colBoard.flat().filter((v) => v === "0").length;
    answer.push(t);
  }

  return answer;
}

const board = ["ABBBBC", "AABAAC", "BCDDAC", "DCCDDE", "DCCEDE", "DDEEEB"]; // 20
// const board = ["DDCCC", "DBBBC", "DBABC", "DBBBC", "DDCCC"];
25;

console.log(solution(board));
