var twoSumLessThanK = function(A, K) {
    let S = -1
    A.sort((a,b) => a - b)
    let lo = 0, hi = A.length - 1;
    while (lo < hi) {
        if (A[lo] + A[hi] < K) {
            S = Math.max(S, A[lo] + A[hi]);
            ++lo;
        }
        else
            --hi;
    }
    return S;
};