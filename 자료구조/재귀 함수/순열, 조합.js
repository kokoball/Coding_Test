// 순열 O(n!), 서로 다른 n개의 원소에서 r개를 중복없이 순서에 상관있게 선택
function permutations(arr, n) {
  // 1개만 뽑는다면 그대로 순열을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index를 제외한 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.filter((_, index) => index !== idx);
    // 선택된 요소를 제외하고 재귀 호출한다.
    const perms = permutations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 순열을 합쳐준다.
    const combine = perms.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  // 결과 반환
  return result;
}

// 조합 O(2의 n 제곱), 서로 다른 원소를 가진 n개 중 r 개선택 방법
function combinations(arr, n) {
  // 1개만 뽑는다면 그대로 조합을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index 이후 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.slice(idx + 1);
    // 선택된 요소 이전 요소들을 제외하고 재귀 호출한다.
    const combis = combinations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 조합을 합쳐준다.
    const combine = combis.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  // 결과 반화
  return result;
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

tree.preorder(tree.root);
tree.inorder(tree.root);
tree.postorder(tree.root);
