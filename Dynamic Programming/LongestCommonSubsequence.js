var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length, n = text2.length
    if (m == 0 || n == 0) return 0
    if (n < m)
        return longestCommonSubsequence(text2, text1)
    const dp = new Array(m + 1).fill(0)
    for (let i = 1; i < n + 1; i++) {
        let prevBest = 0
        for (let j = 1; j < m + 1; j++) {
            let temp = dp[j]
            dp[j] = (text1.charAt(j - 1) == text2.charAt(i - 1)) ? 1 + prevBest : Math.max(dp[j], dp[j - 1])
            prevBest = temp
        }
    }
    return dp[m]
};