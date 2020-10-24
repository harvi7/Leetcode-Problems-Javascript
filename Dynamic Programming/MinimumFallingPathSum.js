var minFallingPathSum = function(A) {
    const N = A.length
    for (let r = N - 2; r >= 0; --r) {
            for (let c = 0; c < N; ++c) {
            let best = A[r + 1][c];
            if (c > 0)
                best = Math.min(best, A[r + 1][c - 1]);
            if (c + 1 < N)
                best = Math.min(best, A[r + 1][c + 1]);
            A[r][c] += best;
        }
    }
    return Math.min(...A[0]);
};