function solution(S) {
  let [id, address] = S.split("@");

  if (id.length < 3) return "*".repeat(id.length) + "@" + address;
  else return id.slice(0, -3) + "*".repeat(3) + "@" + address;
}

const S = "tttttt@test.com";

console.log(solution(S));
