function solution(maps) {
    const answer = [];
    const mapsArr = [];
    const queue = [];
    
    const dr = [-1, 1, 0, 0]
    const dc = [0, 0, -1, 1]
    const [row, col] = [maps.length - 1, maps[0].length - 1]
    
    for(let i = 0; i < maps.length; i++){
        mapsArr.push(maps[i].split(""))
    }
    
    for(let i = 0; i <= row; i++){
        for(let j = 0; j <= col; j++){
            if(mapsArr[i][j] === 'X') continue
            
            let tempNum = 0;
            queue.push([i,j]);
            tempNum += +mapsArr[i][j]
            mapsArr[i][j] = 'X';
            
            while(queue.length > 0){
                const [r, c] = queue.shift()
                
                for(let k = 0; k < 4; k++){
                    const [tr, tc] = [r + dr[k], c + dc[k]]
                    
                    if (0 > tr || tr > row || 0 > tc || tc > col) continue
                    if (mapsArr[tr][tc] === 'X') continue
                    
                    tempNum += +mapsArr[tr][tc]
                    mapsArr[tr][tc] = 'X'
                    
                    queue.push([tr,tc])
                }
            }
            answer.push(tempNum)
        }
    }
    
    if (answer.length === 0) return [-1]
    return answer.sort((a,b) => a - b)
}

