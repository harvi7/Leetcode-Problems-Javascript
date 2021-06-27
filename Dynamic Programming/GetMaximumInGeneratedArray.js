var getMaximumGenerated = function(n) {
    if (n == 0) return 0
    nums = new Array(n + 1).fill(0)
    let maximumValue = 1
    nums[1] = 1
    for (let i = 1; i <= n / 2; i++) {
        nums[i * 2] = nums[i]
        if (i * 2 + 1 <= n) {
            nums[i * 2 + 1] = nums[i] + nums[i + 1]
            maximumValue = Math.max(maximumValue, nums[i * 2 + 1])
        }
    }
    return maximumValue
};