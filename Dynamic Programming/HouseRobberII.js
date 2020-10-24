var rob = function(nums) {
    const rob_simple = function(nums) {
        const arr1 = [0]
        const arr2 = [0]
        for(let i = 0; i <nums.length; i++) {
            arr1[i + 1] = arr2[i] + nums[i];
            arr2[i + 1] = Math.max(arr1[i], arr2[i]);
        }
        return Math.max(arr1.pop(), arr2.pop());
    }
    
    if (nums.length < 2) {
        return nums.reduce((a, b)=> a + b, 0)
    } else {
        return Math.max(rob_simple(nums.slice(1)), rob_simple(nums.slice(0, -1)))
    }
};