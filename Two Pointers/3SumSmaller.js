var threeSumSmaller = function(nums, target) {
    nums.sort((a, b) => a - b)

    function twoSumSmaller(startIndex, target) {
        let count = 0
        let left = startIndex, right = nums.length - 1
        while (left < right) {
            if (nums[left] + nums[right] < target) {
                count += right - left
                left++
            } else {
                right--
            }
        }
        return count
    }

    let res = 0
    for (let i = 0; i < nums.length - 2; i++) {
        res += twoSumSmaller(i + 1, target - nums[i])
    }
    return res;
};