var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]+/gmi,"").toLowerCase()
    var left = 0, right = s.length - 1

    while(left < right) {
        if (s.charAt(left) != s.charAt(right)) return false
        left++
        right--
    }
    return true
};