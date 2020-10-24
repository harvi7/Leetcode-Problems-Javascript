var Solution = function(nums) {
    this.original = new Array(...nums)
    this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const len = this.nums.length
    for (let i = 0; i < len; i++) {
        const rand = Math.round(Math.random() * (len - 1) + 0);
        [this.nums[i], this.nums[rand]] = [this.nums[rand], this.nums[i]]
    }
    return this.nums
};