var canPartition = function(nums) {    
    const sum = nums.reduce((sum, currNum) => sum += currNum, 0)
    
    if (sum % 2 !== 0) return false
    
    const half = Math.floor(sum / 2)
    const dp = new Array(half + 1).fill(false)
    dp[half] = true
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > half) return false
        if (dp[nums[i]]) return true
        for (let j = 1; j <= half; j++) {
            if (dp[j] && j - nums[i] > 0) dp[j - nums[i]] = true
        }
    }
    return false
};