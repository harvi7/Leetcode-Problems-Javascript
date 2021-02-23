var lengthOfLongestSubstringTwoDistinct = function(s) {
    if (!s) return 0
    let n = s.length
    if (n < 3) return n
    
    let hashmap = new Map(), left = 0, right = 0, maxLen = 0
    while (right < n) {
        hashmap.set(s[right], hashmap.has(s[right]) ? hashmap.get(s[right]) + 1 : 1)
        right++;
        while (hashmap.size > 2) {

            hashmap.set(s[left], hashmap.get(s[left]) - 1)
            if(!hashmap.get(s[left])) {
                hashmap.delete(s[left])
            }
            left++;
        }
        maxLen = Math.max(maxLen, right-left)
    }
    return maxLen
};