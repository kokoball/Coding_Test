function solution(dirs) {
  // 캐릭터를 움직이는 명령어 Object로 생성
  const move = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] };

  let check = new Set();
  let now = [0, 0];

  for (let i = 0; i < dirs.length; i++) {
    // 캐릭터가 도착할 좌표
    let nx = now[0] + move[dirs[i]][0];
    let ny = now[1] + move[dirs[i]][1];

    if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;

    // 0,0 에서 0,1 가는경우랑 1,0 에서 0,0 가는경우도 길이 될 수 있기 때문에
    check.add("" + now[0] + now[1] + nx + ny);
    check.add("" + nx + ny + now[0] + now[1]);

    now = [nx, ny];
  }
  return check.size / 2;
}

console.log(solution("ULURRDLLU"));
