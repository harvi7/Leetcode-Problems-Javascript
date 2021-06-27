var minimumTotal = function(triangle) {
    if (triangle.length == 0)
        return 0
    let rows = triangle.length
    let dp = new Array(rows + 1).fill(0)

    for (let i = rows - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
        }
    }

    return dp[0]
};