function solution(order) {
    let answer = 0;
    const stack = [];
    let index = 1
    
    while(index <= order.length || stack.at(-1) === order[answer]){
        if(index === order[answer]){
            answer++
            index++
            continue;
        }
        if(stack.length > 0 && stack.at(-1) === order[answer]){
            answer++
            stack.pop();
            continue;
        }
        stack.push(index++);
    }
 
    return answer;
}
