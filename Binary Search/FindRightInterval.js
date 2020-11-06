let lowerBound = (sorted, x) => {
    let n = sorted.length, l = 0, r = n - 1
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2)
        if (sorted[mid][0] < x)
            l = mid + 1
        else
            r = mid
    }
    return x <= sorted[l][0] ? sorted[l][1] : -1
};

var findRightInterval = function(intervals) {
    sorted = new Map()
    intervals.forEach(([i, j], k) => sorted.set(i, k));
    sorted = [...sorted.entries()].sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
    return intervals.map(([i, j]) => lowerBound(sorted, j))
};