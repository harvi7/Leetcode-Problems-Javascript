var merge = function(intervals) {
    if (!intervals.length) return []
    intervals.sort((a, b) => a[0] - b[0])
    
    const merged = [intervals[0]]
    
    for (let [start, end] of intervals) {
        if (start <= merged[merged.length - 1][1]) {
            const [startPrev, endPrev] = merged.pop()
            merged.push([startPrev, Math.max(end, endPrev)])
        } else merged.push([start, end])
    }
    return merged
};