var kthSmallest = function(matrix, k) {
    var n = matrix.length, start = matrix[0][0], end = matrix[n - 1][n - 1]
    var mid, count
    
    while(start < end) {
        mid = (start + (end - start) / 2) >> 0
        count = countLessEqual(matrix, mid)
        if (count < k) {
            start = mid + 1
        } else {
            end = mid
        }
    }
    return start
};

var countLessEqual = function (matrix, mid) {
    var n = matrix.length
    var count = 0
    var j
    
    matrix.forEach(function(row) {
        for (j = 0; j < n && row[j] <= mid; j++){ }
        count += j
    })
    return count
};