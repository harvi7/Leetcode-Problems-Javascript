var reverseString = function(s) {
    let left = 0, right = s.length - 1
    while (left < right) {
        let t = s[left]
        s[left++] = s[right]
        s[right--] = t
    }
};