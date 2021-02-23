var countSubstrings = function(s) {  
    const countPalindromesAroundCenter = function (lo, hi) {
        let ans = 0
        while (lo >= 0 && hi < s.length) {
            if (s[lo] != s[hi])
                break 
            lo--
            hi++
            ans++
        }
        return ans
    };
    
    let res = 0
    
    for (let i = 0; i < s.length; i++) {
        res += countPalindromesAroundCenter(i, i)
        res += countPalindromesAroundCenter(i, i + 1)
    }
    
    return res
};