var anagramMappings = function(nums1, nums2) {
    const D = {}
    for (let i = 0; i < nums2.length; i++) {
        D[nums2[i]] = i
    }
    return nums1.map(e => D[e])
};