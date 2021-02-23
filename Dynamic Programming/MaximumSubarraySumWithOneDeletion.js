var maximumSum = function(arr) {
    let del = arr[0], res = arr[0], keep = arr[0]
    const n = arr.length
    for(let i = 1; i < n; i++) {
        del = Math.max(keep, del + arr[i])
        keep = Math.max(keep + arr[i], arr[i])
        res = Math.max(res, Math.max(del, keep))
    }
    return res
};