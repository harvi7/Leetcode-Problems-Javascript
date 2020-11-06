var maximalSquare = function(matrix) {
    let rows = matrix.length, cols = rows > 0 ? matrix[0].length : 0
    let dp = Array(cols + 1).fill(0)
    let maxsqlen = 0, prev = 0
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            let temp = dp[j]
            if (matrix[i - 1][j - 1] == '1') {
                dp[j] = Math.min(dp[j - 1], prev, dp[j]) + 1
                maxsqlen = Math.max(maxsqlen, dp[j])
            } else {
                dp[j] = 0
            }
            prev = temp
        }
    }
    return maxsqlen * maxsqlen
};