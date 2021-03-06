var maxUncrossedLines = function(A, B) {
    let m = A.length, n = B.length
    let dp = [...Array(m + 1)].map(row => Array(n + 1).fill(0))
    for (let i = 1; i <= m; i++)
        for (let j = 1; j <= n; j++)
            dp[i][j] = A[i - 1] == B[j - 1] ? 1 + dp[i - 1][j - 1]
                    : Math.max(dp[i][j - 1], dp[i - 1][j]);                    
    return dp[m][n]
};