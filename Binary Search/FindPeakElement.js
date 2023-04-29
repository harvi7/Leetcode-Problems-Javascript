var findPeakElement = function(nums) {
    let left = 0, right = nums.length - 1
    while (left < right) {
        const mid = parseInt(left + (right - left)/2)
        nums[mid] > nums[mid + 1] ? right = mid : left = mid + 1
    }
    return left
};