function solution(weights) {
    let answer = 0;
    const obj = {};
    const so = [1, 1/2, 2/3, 3/4];
    
    weights.sort((a,b) => a - b).forEach(e =>{
        let s;
        so.forEach(i => {
            if( s = i * e, obj[s]) answer += obj[s]
        })
        if(!obj[e]) obj[e] = 1
        else obj[e]++
    })
    
    return answer;
}