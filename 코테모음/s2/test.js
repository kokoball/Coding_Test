function solution(rooms, target) {
  let ans = [];
  let banName = [];
  let obj = {};

  for (let i = 0; i < rooms.length; i++) {
    let spl = rooms[i].split("]");
    let num = spl[0].slice(1);
    let nameArr = spl[1].split(",");

    if (+num === target) {
      for (let i = 0; i < nameArr.length; i++) {
        banName.push(nameArr[i]);
      }
      continue;
    }

    for (let j = 0; j < nameArr.length; j++) {
      if (!obj[nameArr[j]]) {
        if (+num !== target) obj[nameArr[j]] = [num];
        else banName.push(nameArr[j]);
      } else {
        if (+num !== target) obj[nameArr[j]].push(num);
      }
    }
  }
  for (const key in obj) {
    if (banName.indexOf(key) !== -1) delete obj[key];
  }
  let lenArr = [];
  for (const key in obj) {
    lenArr.push(obj[key].length);
  }
  let setArr = [...new Set(lenArr)].sort((a, b) => a - b);

  for (let p = 0; p < setArr.length; p++) {
    let temArr = [];
    let answer = [];
    let temArrName = [];

    for (const key in obj) {
      if (obj[key].length === setArr[p]) answer.push(key);
    }

    for (let i = 0; i < answer.length; i++) {
      let x = obj[answer[i]];
      let temNum = 99999;
      for (let j = 0; j < x.length; j++) {
        temNum = Math.min(Math.abs(x[j] - target), temNum);
      }
      temArr.push(temNum);
      temArrName.push(answer[i]);
    }

    var list = temArr.map((t, i) => ({
      name: temArrName[i],
      val: t,
    }));
    list
      .sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        if (a.name === b.name) return 0;
      })
      .sort((a, b) => a.val - b.val);
    for (let z = 0; z < list.length; z++) {
      ans.push(list[z].name);
    }
  }

  return ans;
}
const rooms = ["[101]Azad,Guard", "[202]Guard", "[303]Guard,Dzaz"];
const target = 202;
// const rooms = ["[403]James", "[404]Azad,Louis,Andy", "[101]Azad,Guard"];
// const target = 403;
console.log(solution(rooms, target));
