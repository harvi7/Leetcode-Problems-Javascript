var nextGreaterElement = function(nums1, nums2) {
    m = {}, s = []
    let N = nums2.length
    for (let i = N - 1; i >= 0; --i) {
        while (s.length > 0 && nums2[i] > s[s.length - 1])
            s.pop()
        if (s.length == 0)
            m[nums2[i]] = -1
        else
            m[nums2[i]] = s[s.length - 1]
        s.push(nums2[i])
    }
    return [...nums1].map(x => m[x])
};