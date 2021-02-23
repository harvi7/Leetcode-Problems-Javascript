var numDecodings = function(s) {
    let dp = {}
    const numDecodings = (s) => {
        if (s[0] === "0") return 0;
        let sLen = s.length
        if (sLen === 0) return 1
        if (dp[s] !== undefined) return dp[s];
        let totalDecompositions = 0
        totalDecompositions = numDecodings(s.slice(1))
        if (sLen >= 2 && parseInt(s.slice(0, 2)) <= 26)
          totalDecompositions += numDecodings(s.slice(2))
        dp[s] = totalDecompositions
        return totalDecompositions
    }
    
    return numDecodings(s)
};