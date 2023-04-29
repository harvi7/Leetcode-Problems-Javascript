var numSquares = function(n) {
    let dp = new Array(n + 1).fill(0)
    for (let i = 0; i <= n; i++)
        dp[i] = i
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
        } 
    }

    return dp[n]
};