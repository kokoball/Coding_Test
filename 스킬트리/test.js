function solution(skill, skill_trees) {
  function stack(n) {
    let skillList = skill.split("");

    for (let i = 0; i < n.length; i++) {
      if (!skill.includes(n[i])) continue;
      if (n[i] === skillList.shift()) continue;
      return false;
    }
    return true;
  }

  return skill_trees.filter(stack).length;
}

const skill = "CBD";
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

console.log(solution(skill, skill_trees));
