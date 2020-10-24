var guessNumber = function(n) {
    let low = 1, high = n
    while (low <= high) {
        const mid1 = Math.trunc(low + (high - low) / 3)
        const mid2 = Math.trunc(high - (high - low) / 3)
        let res1 = guess(mid1)
        let res2 = guess(mid2)
        if (res1 == 0)
            return mid1
        if (res2 == 0)
            return mid2
        else if (res1 < 0)
            high = mid1 - 1
        else if (res2 > 0)
            low = mid2 + 1
        else {
            low = mid1 + 1
            high = mid2 - 1
        }
    }
    return -1
};