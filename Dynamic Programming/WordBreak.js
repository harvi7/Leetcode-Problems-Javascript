var wordBreak = function(s, wordDict) {
    if (!wordDict || wordDict.length == 0) return false
    var dp = Array(s.length + 1).fill(false)
    dp[0] = true
    let maxLen = 0
    for (let word of wordDict)
        maxLen = Math.max(maxLen, word.length)
    for (let end = 1; end < s.length + 1; end++) {
        for (let j = end - 1; j >= 0; j--) {
            if (end - j > maxLen) continue;
            if (dp[j] && wordDict.indexOf(s.substring(j, end)) >= 0) {
                dp[end] = true;
                break;
            }
        }
    }
    return dp[s.length]
};