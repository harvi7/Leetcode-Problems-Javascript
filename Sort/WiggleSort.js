var wiggleSort = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if ((i % 2 === 0) === nums[i] > nums[i - 1]) {
            [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
        }
    }
};