const solution = (number, k) => {
  const stack = [];
  let count = 0;

  for (const item of number) {
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count += 1;
    }
    stack.push(item);
  }
  while (count < k) {
    stack.pop();
    count += 1;
  }
  return stack.join("");
};

const number = "1924";

console.log(solution(number, 2));
