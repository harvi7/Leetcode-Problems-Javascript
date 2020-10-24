var validPalindrome = function(s) {
    let i = 0, j = s.length - 1
    let isPalindrome = (s, i, j) => {
        while (i < j) {
            if (s.charAt(i++) != s.charAt(j--)) return false
        }
        return true
    }
    
    while (i < j) {
        if (s.charAt(i) != s.charAt(j)) return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1)
        i++
        j--
    }
    return true
};