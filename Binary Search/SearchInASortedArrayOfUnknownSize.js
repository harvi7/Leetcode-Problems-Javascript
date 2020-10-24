var search = function (reader, target) {
    const findTarget = (l, r) => {
        while(l <= r) {
            const mid = Math.floor(l + (r - l) / 2)
            if (reader.get(mid) === target) {
                return mid
            } else if(reader.get(mid) < target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return -1
    }
    
    const findBoundaries = (left, right) => reader.get(right) === target ? right
        : reader.get(right) > target ? findTarget(left, right)
        : findBoundaries(right, right * 2)
    
    return findBoundaries(0, 1)
};