function solution(numbers) {
  var answer = [];
  numbers.forEach((number) => {
    let str = "0" + number.toString(2);
    const l = str.length;
    if (str[l - 1] === "0") {
      answer.push(number + 1);
    } else {
      for (let i = str.length; i >= 0; i--) {
        if (str[i] === "0") {
          answer.push(
            parseInt(
              str.substring(0, i) + "1" + "0" + str.substring(i + 2, l),
              2
            )
          );
          break;
        }
      }
    }
  });
  return answer;
}

const numbers = [2, 7];

console.log(solution(numbers));
