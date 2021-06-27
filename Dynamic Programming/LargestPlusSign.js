var orderOfLargestPlusSign = function(N, mines) {
    const banned = new Set()
    let dp = new Array(N).fill(0).map(x => new Array(N).fill(0))

    for (const [row, col] of mines) 
        banned.add(`${row}#${col}`);

    let ans = 0, count;

    for (let r = 0; r < N; ++r) {
        count = 0
        for (let c = 0; c < N; ++c) {
            count = banned.has(`${r}#${c}`) ? 0 : count + 1
            dp[r][c] = count
        }

        count = 0;
        for (let c = N-1; c >= 0; --c) {
            count = banned.has(`${r}#${c}`) ? 0 : count + 1
            dp[r][c] = Math.min(dp[r][c], count)
        }
    }

    for (let c = 0; c < N; ++c) {
        count = 0;
        for (let r = 0; r < N; ++r) {
            count = banned.has(`${r}#${c}`) ? 0 : count + 1
            dp[r][c] = Math.min(dp[r][c], count)
        }

        count = 0;
        for (let r = N-1; r >= 0; --r) {
            count = banned.has(`${r}#${c}`) ? 0 : count + 1
            dp[r][c] = Math.min(dp[r][c], count)
            ans = Math.max(ans, dp[r][c])
        }
    }

    return ans
};