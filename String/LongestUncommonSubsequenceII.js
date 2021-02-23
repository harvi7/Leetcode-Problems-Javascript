var findLUSlength = function(strs) {
    const isSubsequence = (x, y) => {
        let j = 0;
        for (let i = 0; i < y.length && j < x.length; i++)
            if (x[j] == y[i])
                j++;
        return j == x.length
    }
    strs.sort((a, b) => b.length -a.length)
    
    for (let i = 0, j; i < strs.length; i++) {
        let flag = true
        for (let j = 0; j < strs.length; j++) {
            if (i == j)
                continue
            if (isSubsequence(strs[i], strs[j])) {
                flag = false
                break
            }
        }
        if (flag)
            return strs[i].length
    }
    return -1
};