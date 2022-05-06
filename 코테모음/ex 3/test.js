const pair = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, J: 9, K: 10 };

var maxNumberOfFamilies = function (N, S) {
  let answer = 0;
  let sArray = S.split(" ");
  let numArray = [];

  sArray.forEach((x) => {
    numArray.push([x.slice(0, x.length - 1), pair[x.slice(x.length - 1)]]);
  });

  const seatsMap = new Map();

  for (seat of numArray) {
    if (!seatsMap.has(seat[0])) {
      seatsMap.set(seat[0], new Set());
    }
    seatsMap.get(seat[0]).add(seat[1]);
  }

  answer = N * 2;

  seatsMap.forEach((x) => {
    let count = 0;
    let value = 0;

    for (let i = 0; i < 10; i++) {
      if (x.has(i)) {
        count = 0;
        continue;
      }
      if (++count >= 4 && i !== 6 && i !== 8) {
        count = 0;
        value++;
      }
    }

    answer -= 2 - value;
  });

  return answer;
};

console.log(maxNumberOfFamilies(2, "1A 2F 1C"));
// console.log(maxNumberOfFamilies(1, ""));

// (4, "")(2, "1A 1B 2G 1A");
