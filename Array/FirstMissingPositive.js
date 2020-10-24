// https://leetcode.com/problems/first-missing-positive/discuss/17133/Simple-JavaScript-O(n)-time-and-O(1)-space

var firstMissingPositive = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        } else {
            i++;
        }
    }
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }
    return i + 1;
};