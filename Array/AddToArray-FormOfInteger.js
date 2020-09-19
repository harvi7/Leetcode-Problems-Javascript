// https://leetcode.com/problems/add-to-array-form-of-integer/discuss/572725/JavaScript-Solution

var addToArrayForm = function(A, K) {
    const N = A.length
    const ans = []
    let i = N - 1
    let c = 0
    
    while (i >= 0 || K > 0) {
        let s = (K % 10) + c
        if (i >= 0)
            s += A[i]        
        ans.push(s % 10)
        c = s > 9 ? 1 : 0
        K = Math.floor(K / 10)
        i--
    }

    if (c == 1) ans.push(c)
    
    return ans.reverse()
};