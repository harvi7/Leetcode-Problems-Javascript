var binaryGap = function(n) {
    let last = -1, ans = 0
    for (let i = 0; i < 32; i++)
        if (((n >> i) & 1) > 0) {
            if (last >= 0)
                ans = Math.max(ans, i - last)
            last = i
        }

    return ans
};