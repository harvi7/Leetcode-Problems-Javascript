var wordSubsets = function(A, B) {
    let result = []
    let bmax = Array(26).fill(0)

    for (b of B) {
        let bCount = count(b)
        for(let i = 0; i < 26; i++) {
          bmax[i] = Math.max(bmax[i], bCount[i])
        }
    }

    for(a of A) {
        let aCount = count(a)
        for(var i = 0; i < 26; i++) {
          if(aCount[i] < bmax[i]) break
        }
        if (i == 26) result.push(a)
    }

    return result
    
}

count = function(b) {
    let charCodeOffset = -97
    let arr = Array(26).fill(0)

    for (let i = 0; i < b.length; i++) {
        charI = b.charCodeAt(i) + charCodeOffset
        arr[charI] = (arr[charI] || 0) + 1
    }
    return arr
};