var sequentialDigits = function(low, high) {
    const digits = "123456789"
    const lowLen = low.toString().length
    const highLen = high.toString().length
    const result = [], n = 10
    
    for (let len = lowLen; len <= highLen; len++) {   
        for (let start = 0; start < n - len; start++) {
            let num = Number(digits.substring(start, start + len))
            if (low <= num && num <= high)
                result.push(num)
        }
    }
    return result
};