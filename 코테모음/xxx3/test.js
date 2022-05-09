class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.maxVal = null;
  }

  insert(value, index) {
    const newNode = new Node(value);

    if (index === -1 && this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (index === 0) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else if (index === 1) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }
  findMaxUtil(node) {
    // Base Case
    if (node === null) return 0;
    let l;
    let r;

    // l and r store maximum path sum going through left and
    // right child of root respectively
    if (node === undefined) return;
    else l = this.findMaxUtil(node.left);

    if (node === undefined) return;
    else r = this.findMaxUtil(node.right);

    // // Max path for parent call of root. This path must
    // // include at-most one child of root
    let max_single = Math.max(Math.max(l, r) + node.value, node.value);

    // // Max Top represents the sum when the Node under
    // // consideration is the root of the maxsum path and no
    // // ancestors of root are there in max sum path
    let max_top = Math.max(max_single, l + r + node.value);

    // // Store the Maximum Result.
    this.maxVal = Math.max(this.maxVal, max_top);

    return max_single;
  }
  findMaxsum() {
    console.log(1);
    return this.findMaxSum(this.root);
  }
  findMaxSum(node) {
    // Initialize result
    // int res2 = Integer.MIN_VALUE;
    this.maxVal = Number.MIN_VALUE;

    // Compute and return result
    this.findMaxUtil(node);
    return this.maxVal;
  }
}

// This function returns overall maximum path sum in 'res'
// And returns max path sum going through root.

// Returns maximum path sum in tree with given root

const tree = new Tree();
tree.insert(5, -1);
tree.insert(6, 0);
tree.insert(4, 0);
tree.insert(3, 0);
tree.insert(13, 1);
tree.insert(14, 1);
console.log(tree);
console.log(tree.findMaxSum());
// root = new Node(10);
// root.left = new Node(2);
// root.right = new Node(10);
// root.left.left = new Node(20);
// root.left.right = new Node(1);
// root.right.right = new Node(-25);
// root.right.right.left = new Node(3);
// root.right.right.right = new Node(4);
// console.log("Max path sum is : " + findMaxsum());
