var NumArray = function(nums) {
    this.dp = nums.map((sum => val => sum += val)(0));
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.dp[right] - (this.dp[left - 1] ?? 0);
};