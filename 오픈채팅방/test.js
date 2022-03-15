function solution(record) {
  let answer = [];
  let userList = {};
  let actionList = [];
  let idList = [];

  record.map((chat) => {
    const [action, id, name] = chat.split(" ");
    actionList.push(action);
    idList.push(id);
    if (action === "Enter" || action === "Change") userList[id] = name;
  });

  for (let i = 0; i < actionList.length; i++) {
    if (actionList[i] === "Enter")
      answer.push(`${userList[idList[i]]}님이 들어왔습니다.`);
    if (actionList[i] === "Leave")
      answer.push(`${userList[idList[i]]}님이 나갔습니다.`);
  }

  return answer;
}

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

console.log(solution(record));
