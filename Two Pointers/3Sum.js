var threeSum = function(nums) {
    const result = []
    if (nums.length < 3) return result
    
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        if (i == 0 || (i > 0 && nums[i] > nums[i - 1])) {
                low = i + 1, high = nums.length - 1, sum = -nums[i]
                while (low < high) {
                    if (nums[low] + nums[high] == sum) {
                        result.push([nums[i], nums[low], nums[high]]);
                        while (low < high && nums[low] == nums[low + 1]) low++
                        while(low < high && nums[high] == nums[high - 1]) high--
                     
                        low++
                        high--;    

                    } else if(nums[low] + nums[high] > sum) {
                        high--
                    } else {
                        low++
                    }
                }
            }
    }
    return result
};