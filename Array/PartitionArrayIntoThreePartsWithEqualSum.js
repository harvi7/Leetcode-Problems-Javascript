var canThreePartsEqualSum = function(A) {
    if (A.length < 3) return false
    let sum = A.reduce((a, b) => a + b, 0)
    if (sum % 3 != 0 ) return false
    let target = sum / 3

    let count = 0, curSum = 0
    
    for (let i = 0; i < A.length - 1; i++) {
        curSum += A[i]
        if(curSum == target) {
            count++
            curSum = 0
        }
        if (count == 2)  return true
    }
    return false
};