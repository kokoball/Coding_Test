class Node {
  constructor(value = "root") {
    this.value = value;
    this.children = new Map();
    this.count = 0;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char))
        currentNode.children.set(char, new Node(char));
      currentNode = currentNode.children.get(char);
      currentNode.count++;
    }
  }

  loop(node = this.root) {
    for (const [key, val] of node.children) {
      console.log(val);
      this.loop(val);
    }
  }

  searchCount(word) {
    let count = 0;
    let node = this.root;
    for (const char of word) {
      count++;
      node = node.children.get(char);
      if (node.count === 1) break;
    }

    return count;
  }
}

function solution(words) {
  const trie = new Trie();
  let answer = 0;

  for (const word of words) {
    trie.insert(word);
  }

  for (const word of words) {
    const count = trie.searchCount(word);
    answer += count;
  }

  return answer;
}

const words = ["go", "gone", "guild"];

console.log(solution(words));
