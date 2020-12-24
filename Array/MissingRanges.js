var findMissingRanges = function(nums, lower, upper) {
    const formatRange = (lower, upper) => {
        if (lower == upper)
            return ('' + lower)
        return [lower, upper].join('->')
    }

    var result = []
    
    let prev = lower - 1
    for (let i = 0; i <= nums.length; i++) {
        let cur = (i < nums.length) ? nums[i] : upper + 1
        if (prev + 1 <= cur - 1)
            result.push(formatRange(prev + 1, cur - 1))
        prev = cur
    }
    return result
};