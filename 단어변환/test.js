function solution(begin, target, words) {
  const queue = [begin];
  let visitArr = new Array(words.length).fill(false);
  let ctr = 0;
  let shiftedWord = begin;
  let queueLength = 1;

  while (queue.length > 0) {
    shiftedWord = queue.shift();
    queueLength--;

    for (let i in words) {
      if (check(shiftedWord, words[i])) {
        if (visitArr[i] === true) continue;
        if (words[i] === target) return ctr + 1;

        visitArr[i] = true;
        queue.push(words[i]);
      }
    }
    if (queueLength === 0) {
      ctr++;
      queueLength = queue.length;
    }
  }
  return 0;

  function check(st, word) {
    let diffCnt = 0;

    if (st.length != word.length) return false;

    for (let i = 0; i < st.length; i++) {
      if (st.chafAt(i) != word.chatAt(i)) diffCnt++;
      if (diffCnt > 1) return false;
    }
    return true;
  }
}

const arr = [7, 4, 5, 6];

console.log(solution(2, 10, arr));
