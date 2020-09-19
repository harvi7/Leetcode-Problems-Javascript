var maxRotateFunction = function(A) {
    if (!A.length) return 0
    let allSum = A.reduce((acc, cur) => acc + cur);
    let F = A.reduce((acc, cur, idx) => acc + cur * idx, 0)
    let maxF = F
    let N = A.length 
    for (let i = N - 1; i > 0; i-- ) {
        F += allSum - N * A[i]
        maxF = Math.max(F, maxF)
    }
    return maxF
};