var maxProduct = function(nums) {
    let currMin = nums[0], currMax = nums[0], ans = nums[0]
    for (let i = 1; i < nums.length; ++i) {
        let next = [currMax * nums[i], nums[i], currMin * nums[i]];                
        [ currMin, currMax ] = [ Math.min(...next), Math.max(...next) ];  
        ans = Math.max(ans, currMax);
    }
    return ans;
};