var fixedPoint = function(A) {
    let l = 0, r = A.length - 1
    while (l < r) {
        let m = l + Math.floor((r - l) / 2)
        if (A[m] - m < 0)
            l = m + 1
        else
            r = m
    }
    return A[l] == l ? l : -1
};