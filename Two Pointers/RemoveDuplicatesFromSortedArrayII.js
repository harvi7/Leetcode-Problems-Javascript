var removeDuplicates = function(nums) {
    if (!nums || nums.length == 0) return 0;
    let left = 2
    for (let right = 2; right < nums.length; right++) {
        if (nums[left - 2] != nums[right])
            nums[left++] = nums[right]
    }
    return left
};