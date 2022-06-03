let x = "원범 원범 혜원 혜원 혜원 혜원 유진 유진";
let sp = x.split(" ");

const obj = {};
const oobj = {};

for (let i = 0; i < sp.length; i++) {
  obj[sp[i]] = (obj[sp[i]] || 0) + 1;
}
const xx = Object.keys(obj).map((t, i) => ({
  name: t,
  num: Object.values(obj)[i],
}));

xx.sort((a, b) => b.num - a.num);

console.log(x.split(" "));
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(xx[0]);
console.log(`${xx[0].name}(이)가 총 ${xx[0].num}표로 반장이 되었습니다.`);
