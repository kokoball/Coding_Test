function solution(want, number, discount) {
    let answer = 0;
    const w = want.filter((v,i) => want.indexOf(v) === i);
    
    for(let i = 0; i + 10 <= discount.length; i++){
        let tempArray = discount.slice(i, i + 10)
        let answerArray = tempArray.filter((v,index) => tempArray.indexOf(v) === index)
        
        if(w.length === answerArray.length){
            let check = true
            let secondCheck = true
            
            for(let j = 0; j < want.length; j++){
                if(want.indexOf(answerArray[j]) === -1){
                    check = false;
                    break;
                }   
            }
            if (check){
                for(let j = 0; j < want.length; j++){
                    if(number[j] !== tempArray.filter((v, index) => v === want[j]).length){
                        secondCheck = false;
                        break;
                    }
                }
                
            }
            if(check && secondCheck) answer++
        } else continue
    }
    
    
    
    return answer;
}

// 최소 10 단위로 반복해서
// 그 배열이 want 값이 다 있는지 확인
// 없으면 pass, 있으면 검사 
// pass 면 answer 추가?
