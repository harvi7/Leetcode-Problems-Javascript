var champagneTower = function(poured, query_row, query_glass) {
    let A = new Array(102).fill(0).map(x => new Array(102).fill(0))
    A[0][0] = poured
    for (let r = 0; r <= query_row; ++r) {
        for (let c = 0; c <= r; ++c) {
            let q = (A[r][c] - 1.0) / 2.0
            if (q > 0) {
                A[r+1][c] += q
                A[r+1][c+1] += q
            }
        }
    }

    return Math.min(1, A[query_row][query_glass])
};