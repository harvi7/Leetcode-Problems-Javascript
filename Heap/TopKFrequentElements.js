var topKFrequent = function(nums, k) {
    dic = new Map()
    nums.forEach(x => dic.set(x, 1 + (dic.get(x) || 0)))
    return [...dic.entries()].sort((a, b) => b[1] - a[1]).map(pair => pair[0]).slice(0, k);
};