var productExceptSelf = function(nums) {
    const res = [1]
    for (let i = 1; i < nums.length; i++) {
        res[i] = nums[i - 1] * res[i - 1];
    }
    R = 1
    for (let j = nums.length - 1; j >= 0; j--) {
        res[j] = res[j] * R
        R = R * nums[j]
    }
    return res;
};