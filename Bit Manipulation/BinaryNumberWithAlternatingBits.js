var hasAlternatingBits = function(n) {
    while (n > 0) {
        let cur = n % 2
        n = parseInt(n / 2)
        if(cur === n % 2) {
            return false
        }
    }
    return true
};