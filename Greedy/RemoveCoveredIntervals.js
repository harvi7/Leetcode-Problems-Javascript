var removeCoveredIntervals = function(intervals) {
    intervals.sort((o1, o2) => o1[0] == o2[0] ? o2[1] - o1[1]: o1[0] - o2[0])
    let prev_end = 0
    return intervals.filter(x => {
        if (x[1] <= prev_end)
            return false
        prev_end = x[1]
        return true
    }).length
};