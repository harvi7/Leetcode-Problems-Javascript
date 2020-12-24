var findMaxAverage = function(nums, k) {
    let right = nums[0], left = nums[0]
    for (let num of nums) {
        right = Math.max(right, num)
        left = Math.min(left, num)
    }

    while (right - left > 1e-5) {
        let mid = (right + left) / 2
        if (check(nums, mid, k)) left = mid
        else right = mid
    }
    return left
};

const check = (nums, mid, k) => {
    let currSum = 0, prevSum = 0, minSum = 0
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i] - mid
        if (i >= k - 1) {
            if (currSum - minSum >= 0) return true
            prevSum += nums[i - k + 1] - mid
            minSum = Math.min(minSum, prevSum)
        }
    }
    return false
}