var find132pattern = function(nums) {
    if (!nums || nums.length < 3) return false
       let aux = [nums[0]]
       for (let k = 1; k < nums.length; k++) 
           aux[k] = Math.min(nums[k], aux[k - 1])
       
       let stack = [nums[nums.length - 1]]
       
       for (let j = nums.length - 2; j >= 0; j--) {
           if (nums[j] > aux[j]) {
               while (stack && stack[stack.length - 1] <= aux[j])
                   stack.pop()
               if (stack && stack[stack.length - 1] < nums[j])
                   return true
               stack.push(nums[j])
           }
       }
       return false
};