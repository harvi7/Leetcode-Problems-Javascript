var insert = function(intervals, newInterval) {
    if (intervals.length === 0) return [ newInterval ]
    const res = []
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i]
        if (newInterval === null || interval[1] < newInterval[0]){
            res.push(interval);
        } else if (newInterval[1] < interval[0]){
            res.push(newInterval)
            res.push(interval)
            newInterval = null
        } else {
            newInterval[0] = Math.min(newInterval[0], interval[0])
            newInterval[1] = Math.max(newInterval[1], interval[1])
        }
    }

    if (newInterval != null)
        res.push(newInterval)
        
    return res
    
};