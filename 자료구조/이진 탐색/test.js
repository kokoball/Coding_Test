// 배열로 구현

const array = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712];

function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (array[mid] === findValue) {
      return mid;
    }

    if (array[mid] > findValue) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch(array, 2876));
console.log(binarySearch(array, 1)); // 1?
console.log(binarySearch(array, 500));
