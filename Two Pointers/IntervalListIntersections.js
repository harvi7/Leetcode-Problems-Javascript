var intervalIntersection = function(A, B) {
    const ans = []
    let i = 0, j = 0
    let lo, hi
    while (i < A.length && j <  B.length) {
        const [x, y] = A[i]
        const [l, r] = B[j]
        lo = Math.max(x, l)
        hi = Math.min(y, r)
        if (hi >= lo) {
            ans.push([lo, hi])
        }
        y > r ? j ++ : i ++
    }
    return ans
};