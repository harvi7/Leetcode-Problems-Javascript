var longestPalindrome = function(s) {
    let longest = '';
    const expandAroundCenter = (str, i, j) => {
        while(i >= 0 && j < str.length && str[i] === str[j]) {
            i -= 1;
            j += 1;
        }
        return str.slice(i + 1, j)
    }
    
    for (let i = 0; i < s.length; i++) {
        const current1 = expandAroundCenter(s, i, i)
        const current2 = expandAroundCenter(s, i, i + 1)
        const longerPalindrome = current1.length > current2.length ? current1 : current2
        if (longerPalindrome.length > longest.length) {
            longest = longerPalindrome
        } 
    }
    return longest
};