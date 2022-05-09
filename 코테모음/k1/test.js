function solution(survey, choices) {
  let answer = "";
  let obj = {};

  obj["R"] = 0;
  obj["T"] = 0;
  obj["C"] = 0;
  obj["F"] = 0;
  obj["J"] = 0;
  obj["M"] = 0;
  obj["A"] = 0;
  obj["N"] = 0;

  for (let i = 0; i < survey.length; i++) {
    let first = survey[i][0];
    let second = survey[i][1];

    if (choices[i] - 4 > 0) obj[second] += choices[i] - 4;
    else if (choices[i] - 4 < 0) obj[first] += Math.abs(choices[i] - 4);
  }
  if (obj["R"] >= obj["T"]) answer += "R";
  else answer += "T";
  if (obj["C"] >= obj["F"]) answer += "C";
  else answer += "F";
  if (obj["J"] >= obj["M"]) answer += "J";
  else answer += "M";
  if (obj["A"] >= obj["N"]) answer += "A";
  else answer += "N";

  return answer;
}

let survey = ["AN", "CF", "MJ", "RT", "NA"];
let choices = [5, 3, 2, 7, 5];

console.log(solution(survey, choices));
