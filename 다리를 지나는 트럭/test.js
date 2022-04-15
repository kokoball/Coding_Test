function solution(bridge_length, weight, truck_weights) {
  // answer: 걸린 시간
  let answer = 0;

  // queue: 현재 다리상태
  let queue = [];

  // queueSum: 현재 다리 무게
  let queueSum = 0;

  // queue의 길이는 다리 길이로 하고 다리 하나하나를 0으로 초기화
  for (let i = 0; i < bridge_length; i++) {
    queue.push(0);
  }

  // now_truck : 현재 다리를 지나가는 트럭
  let now_truck = truck_weights.shift();

  // 큐에 트럭을 넣고 다리를 앞으로 한칸씩 땡김
  queue.unshift(now_truck);
  queue.pop();

  // 다리 무게 증가
  queueSum += now_truck;

  // 시간 증가
  answer++;

  // 쉬지않고 큐에 트럭을 넣거나 다리를 건너기 때문에 queueSum 이 0이 되면 모든 트럭이 지나간 것.
  while (queueSum) {
    // 다리에 있는 트럭 이동
    queueSum -= queue.pop();

    // 일단 다리를 안건넌 트럭 하나 빼고,
    now_truck = truck_weights.shift();

    // 다리에 들어갈 수 있으면 큐(다리)에 트럭 넣고 무게 증가
    if (now_truck + queueSum <= weight) {
      queue.unshift(now_truck);
      queueSum += now_truck;
    }
    // 다리에 들어갈 수 없으면 0을 넣고 뺏던거 다시 트럭집단에 고스란히 넣어줌
    else {
      queue.unshift(0);
      truck_weights.unshift(now_truck);
    }
    answer++;
  }
  return answer;
}

const arr = [7, 4, 5, 6];

console.log(solution(2, 10, arr));
