var maxPower = function(s) {
    if (s.length == 1) return 1
    let count = 0, maxCount = 0
    let previous = ' '
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (c == previous) {
            count++
        } else {
            count = 1
            previous = c
        }
        maxCount = Math.max(maxCount, count)
    }
    return maxCount
};