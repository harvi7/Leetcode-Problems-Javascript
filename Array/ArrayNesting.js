var arrayNesting = function(nums) {
    var res = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != -1) {
            let start = nums[i], count = 0
            while (nums[start] != -1) {
                let temp = start
                start = nums[start]
                count++
                nums[temp] = -1
            }
            res = Math.max(res, count)
        }
    }
    return res
};