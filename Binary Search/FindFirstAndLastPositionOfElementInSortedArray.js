var searchRange = function(nums, target) {
    const start =  find(nums, target, true)
    const end =  find(nums, target, false)
    return [start, end]
};

const  find = (nums, target, first) => {
    let result = -1, left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
          right = mid - 1
        } else {
          result = mid
          if (first) right = mid - 1
          else left = mid + 1
        }
    }
    return result
}