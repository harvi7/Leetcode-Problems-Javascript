var maxDistance = function(arrays) {
    let N = arrays.length, res = 0
    let lo = i => arrays[i][0],
        hi = i => arrays[i][arrays[i].length - 1]
    let min = lo(0),
        max = hi(0);
    for (let i = 1; i < N; ++i) {
        res = Math.max(res, Math.abs(min - hi(i)), Math.abs(max - lo(i)))
        min = Math.min(min, lo(i))
        max = Math.max(max, hi(i))
    }
    return res
};