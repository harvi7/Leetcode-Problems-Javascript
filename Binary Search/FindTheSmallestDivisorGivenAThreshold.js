var smallestDivisor = function(nums, threshold) {
    let left = 1, right = nums[nums.length - 1]
    
    const checkEligible = (divisor) => {
        let s = 0
        for (const num of nums) {
            if(s > threshold) return false
            s += Math.ceil(num / divisor)
        }
        return s <= threshold
    };
    while(left <= right) {
        const mid = left + Math.floor((right - left) >> 1)
        if (checkEligible(mid)) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left
};