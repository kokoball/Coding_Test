let n = 5;
let x = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    x += " ";
  }
  for (let j = 0; j < i + 1; j++) {
    x += "*";
  }
  for (let j = 0; j < i; j++) {
    x += "*";
  }
  for (let j = 0; j < n - 1 - i; j++) {
    x += " ";
  }
  x += "\n";
}

console.log(x);
