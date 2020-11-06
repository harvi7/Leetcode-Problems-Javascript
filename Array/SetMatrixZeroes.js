var setZeroes = function(matrix) {
    if (matrix.length == 0) return matrix;
    let [zeros_row, zeros_col] = [new Set(), new Set()];
    // scan for the zeros
    for (let [i, row] of matrix.entries()) {
        for (let [j, e] of row.entries()) {
            if (e === 0) {
                zeros_row.add(i);
                zeros_col.add(j);
            }
        }
    }
    // write zeros in the matrix
    for (let [i, row] of matrix.entries()) {
        for (let [j, e] of row.entries()) {
            if (zeros_row.has(i)) matrix[i][j] = 0;
            if (zeros_col.has(j)) matrix[i][j] = 0;
        }
    }
};