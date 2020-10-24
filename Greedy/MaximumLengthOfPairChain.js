var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[1] - b[1])
    let prev = pairs[0], count = 1
    
    for(let i = 1; i < pairs.length; i++) {
        const [prevS, prevE] = prev
        const [currS, currE] = pairs[i]
        if(prevE < currS) {
            prev = pairs[i]
            count++
        }
    }
    return count
};