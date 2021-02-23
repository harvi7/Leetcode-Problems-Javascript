var minSubArrayLen = function(s, nums) {
    let result = Number.MAX_SAFE_INTEGER, left = 0, sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        while (sum >= s) {
            result = Math.min(result, i - left + 1)
            sum -= nums[left]
            left += 1
        }
    }

    return result === Number.MAX_SAFE_INTEGER ? 0 : result
};