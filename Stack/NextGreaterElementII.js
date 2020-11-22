var nextGreaterElements = function(nums) {
    const n = nums.length, res = Array(n).fill(-1), stack = []
    for (let i = 0; i < n * 2; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
            res[stack[stack.length - 1]] = nums[i % n]
            stack.pop()
        }
        if (i < n) stack.push(i)
    }
    return res
};