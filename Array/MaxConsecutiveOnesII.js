var findMaxConsecutiveOnes = function(nums) {
    let max = 0, q = -1
    for (let l = 0, h = 0; h < nums.length; h++) {
        if (nums[h] == 0) {
            l = q + 1
            q = h
        }
        max = Math.max(max, h - l + 1)
    }                                                               
    return max
};