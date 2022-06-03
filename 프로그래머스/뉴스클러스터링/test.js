function solution(str1, str2) {
  var answer = 0;
  var arr1 = [];
  var arr2 = [];
  var regEx = /^[a-zA-Z]+$/;

  // 1. 2글자씩 끊어서 다중집합 구하기 -  영문만 고려, 대소문자 무시
  for (var i = 0; i < str1.length - 1; i++) {
    var subStr = str1.toLowerCase().substring(i, i + 2);
    if (regEx.test(subStr)) {
      arr1.push(subStr);
    }
  }

  for (var j = 0; j < str2.length - 1; j++) {
    var subStr = str2.toLowerCase().substring(j, j + 2);
    if (regEx.test(subStr)) {
      arr2.push(subStr);
    }
  }

  // 2. 합집합, 교집합 구하기
  var union = []; // 중복포함, 합집합 배열 (multi set)
  var intersect = []; // 중복포함, 교집합 배열

  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      intersect.push(arr1.splice(arr1.indexOf(arr2[i]), 1)); //***교집합
    }
    union.push(arr2[i]); //***합집합
  }

  for (var i = 0; i < arr1.length; i++) {
    // ***합집합에 arr1 차집합 넣어주기
    union.push(arr1[i]);
  }

  // 3. 유사도 구하기, 예외처리
  if (union.length === 0) {
    answer = 65536;
  } else {
    answer = Math.floor((intersect.length / union.length) * 65536);
  }

  return answer;
}

const str1 = "FRANCE";
const str2 = "french";

console.log(solution(str1, str2));
