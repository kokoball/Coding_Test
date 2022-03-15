function solution(rows, columns, queries) {
  var answer = [];
  const board = Array(rows)
    .fill(0)
    .map(() => Array(columns));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = i * columns + j + 1;
    }
  }

  queries.forEach((query) => {
    const [x1, y1, x2, y2] = query.map((pos) => pos - 1);
    const queue = [];

    for (let i = 0; i < y2 - y1; i++) queue.push(board[x1][y1 + i]);
    for (let i = 0; i < x2 - x1; i++) queue.push(board[x1 + i][y2]);
    for (let i = 0; i < y2 - y1; i++) queue.push(board[x2][y2 - i]);
    for (let i = 0; i < x2 - x1; i++) queue.push(board[x2 - i][y1]);

    queue.unshift(queue.pop());
    answer.push(Math.min(...queue));

    for (let i = 0; i < y2 - y1; i++) board[x1][y1 + i] = queue.shift();
    for (let i = 0; i < x2 - x1; i++) board[x1 + i][y2] = queue.shift();
    for (let i = 0; i < y2 - y1; i++) board[x2][y2 - i] = queue.shift();
    for (let i = 0; i < x2 - x1; i++) board[x2 - i][y1] = queue.shift();
  });
  return answer;
}

const rows = 6;
const columns = 6;
const queries = [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
];

console.log(solution(rows, columns, queries));
