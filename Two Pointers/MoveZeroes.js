var moveZeroes = function(nums) {
    let n = nums.length
    if (n == 0 || n == 1) return

    let left = 0, right = 0

    while (right < n) {
        if (nums[right] == 0)
            right++
        else {
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left++
            right++
        }
    }
};