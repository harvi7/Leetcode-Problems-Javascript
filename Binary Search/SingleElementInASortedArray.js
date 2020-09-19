var singleNonDuplicate = function(nums) {
    if (nums.length == 1) return nums[0];
    return bsa(0, nums.length - 1);
    function bsa(low, high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] == nums[mid - 1]) return mid % 2 ? bsa(mid + 1, high) : bsa(low, mid);
        if (nums[mid] == nums[mid + 1]) return mid % 2 ? bsa(low, mid - 1) : bsa(mid, high);
        return nums[mid];
    }
};