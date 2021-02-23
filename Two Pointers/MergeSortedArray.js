// https://leetcode.com/problems/merge-sorted-array/discuss/344765/Cleanest-Javascript-solution

var merge = function(nums1, m, nums2, n) {
    var insertPos = m + n - 1
    m--; n--;
    while (n >= 0) {
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--]
    }
};