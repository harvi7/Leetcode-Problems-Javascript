var sortColors = function(nums) {
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    let start = 0, end = nums.length - 1, index = 0

    while (index <= end && start < end) {
        if (nums[index] === 0) {
          swap(index, start);
          start++
          index++
        } else if (nums[index] === 2) {
          swap(index, end);
          end--
        } else index++
    }
};