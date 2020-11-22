var searchMatrix = function(matrix, target) {
    if (!matrix.length) return false

    let row = 0, col = matrix[0].length-1

    while(row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true
        if (matrix[row][col] > target) col--
        else row++
    }
    return false
};