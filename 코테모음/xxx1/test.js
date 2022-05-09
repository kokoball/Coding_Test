function getMaxBarrier(initialEnergy, th) {
  let arr = initialEnergy.sort((a, b) => b - a);
  let acc = [];
  let result = 0;
  let indexNum = arr.length - 1;
  let index;

  for (let i = 0; i < initialEnergy.length; i++) {
    acc.push(result);
    result += arr[i];
  }

  for (index = 0; ; index++) {
    let numSum = 0;
    while (arr[indexNum] - index <= 0 && indexNum >= 0) indexNum--;

    numSum = acc[indexNum + 1] - index * indexNum;
    if (numSum < th) break;
  }
  return index - 1;
}

let initialEnergy = [4, 8, 7, 1, 2];
let initialEnergy2 = [5, 2, 13, 10];

console.log(getMaxBarrier(initialEnergy, 9));
console.log(getMaxBarrier(initialEnergy2, 8));

// function getMaxBarrier(initialEnergy, th) {
//   let arr = initialEnergy.sort((a, b) => b - a);
//   let acc = [];
//   let result = 0;
//   let index;

//   for (let i = 0; i < initialEnergy.length; i++) {
//     acc.push(result);
//     result += arr[i];
//   }

//   for (index = 0; ; index++) {
//     let numSum = 0;
//     let indexNum = arr.indexOf(index);
//     for (let j = 0; j < initialEnergy.length; j++) {
//       if (initialEnergy[j] - index < 0) break;
//       numSum += initialEnergy[j] - index;
//     }
//     if (numSum < th) break;
//   }
//   return index - 1;
// }
