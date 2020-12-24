var wordBreak = function(s, wordDict) {
    let wordSet = new Set(), N = s.length, m = Array(N + 1).fill(null)
    wordDict.forEach(word => wordSet.add(word))
    let helper = (i = 0, words = []) => {
        if (m[i] != null)                            
            return m[i]
        if (i == N)                                 
            return m[i] = [[]]
        for (let j = i + 1; j <= N; ++j) {           
            let cand = s.substring(i, j)
            if (wordSet.has(cand))
                for (let tail of helper(j))
                    words.push([cand].concat(tail))
        }
        return m[i] = words
    };
    return helper().map(a => a.join(' '))
};