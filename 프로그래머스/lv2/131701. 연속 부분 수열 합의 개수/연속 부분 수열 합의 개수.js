function solution(elements) {
    const set = new Set();
    const circularArr = elements.slice().concat(elements)
    
    for(let i = 1; i <= elements.length; i++ ){
        // const tempArr = elements.slice().concat(elements.slice(0,i))
        
        for(let j = 0; j < elements.length; j++){
            set.add(circularArr.slice(j, j+i).reduce((a,c) => a+c, 0))
        }
    }
    
  return set.size
}