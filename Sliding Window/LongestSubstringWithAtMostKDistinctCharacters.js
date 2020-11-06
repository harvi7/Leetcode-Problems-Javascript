var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (!s || k === 0) return 0
    
    let hashmap = new Map(), left = 0, right = 0, max_len = 0, n = s.length
    while(right < s.length){
        let c = s[right]

        if (hashmap.has(c)) {
            hashmap.set(c, hashmap.get(c) + 1)
        } else hashmap.set(c, 1)

        while(hashmap.size > k) {

            max_len = Math.max(max_len, right- left)
            let c = s[left];

            if (hashmap.has(c)) {
                hashmap.set(c,hashmap.get(c) - 1)
                if(hashmap.get(c) == 0) hashmap.delete(c)
            }
            left++
        }
        right++
    }

    max_len = Math.max(max_len, right- left)
    return max_len
};