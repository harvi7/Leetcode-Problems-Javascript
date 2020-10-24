var findMaxAverage = function(nums, k) {
    let sum = nums.slice(0 , k).reduce((r, n) => r + n, 0);
    let res = sum;
    for (let i = 1; i < nums.length - k + 1; i++) {
        sum += nums[i + k - 1] - nums[i - 1] 
        res = Math.max(res, sum);
    }
    return res / k;
};