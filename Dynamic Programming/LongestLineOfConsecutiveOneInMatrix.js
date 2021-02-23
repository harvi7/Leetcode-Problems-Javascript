var longestLine = function(M) {
    const m = M.length
    if (!m) return 0
    const n = M[0].length
    if (!n) return 0

    const dp = [...Array(m)].map(() => [...Array(n)].map(() => [0, 0, 0, 0]))
    let ones = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (M[i][j]) {
                dp[i][j][0] = (i ? dp[i - 1][j][0] : 0) + 1 
                dp[i][j][1] = (j < n - 1 && i ? dp[i - 1][j + 1][1] : 0) + 1 
                dp[i][j][2] = (j && i ? dp[i - 1][j - 1][2] : 0) + 1 
                dp[i][j][3] = (j ? dp[i][j - 1][3] : 0) + 1 

                ones = Math.max(ones, ...dp[i][j])
            }
        }
    }

    return ones
}