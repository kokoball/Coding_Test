class MaxHeap {
  constructor() {
    // 0번 인덱스는 편의를 위해서 null로 비워둠
    this.heap = [null];
  }

  push(value) {
    // heap의 가장 마지막에 요소 추가
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    // 부모가 더 우선순위가 낮거나 루트가 아닐때까지 루프 반복(부모 자식 위치 변경)
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    // if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우 ??

    // 루트 요소 반환 위해 임시로 상수 반환
    // 그리고 루트 정점은 가장 마지막 요소로 대체
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    // 루트로 부터 아래로 내려가기 위한 변수 설정
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // 반복은 하위 요소들이 현재 종점보다 우선순위가 낮으면 종료
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      // 왼쪽 정점 보다 오른쪽 정점의 우선순위가 높으면 오른쪽 정점과 변경
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        // 아닐경우 왼쪽 정점과 변경
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      // 왼쪽 정점의 위치와 오른쪽 정점의 위치를 다시 설정
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

const heap = new MaxHeap();

heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);

// const array = [];
// array.push(heap.pop());
// array.push(heap.pop());
// array.push(heap.pop());
// array.push(heap.pop());
// array.push(heap.pop());

console.log(heap);
// console.log(array);
