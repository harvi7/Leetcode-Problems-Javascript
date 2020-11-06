var diagonalSum = function(mat) {
    let N = mat.length, sum = 0
    for (let i = 0; i < N; ++i)
        sum += mat[i][i] + mat[i][N - 1 - i]
    if (N & 1)
        sum -= mat[Math.floor(N / 2)][Math.floor(N / 2)]
    return sum
};