var lengthOfLongestSubstring = function(s) {
    const index = {}
    var left = 0
    
    return s.split('').reduce((max, v, i) => {
        left = index[v] >= left ? index[v] + 1 : left
        index[v] = i
        return Math.max(max, i - left + 1)
    }, 0)
};