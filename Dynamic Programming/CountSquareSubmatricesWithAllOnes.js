var countSquares = function(matrix) {
    let n = matrix.length, m = matrix[0].length
        let counts = [...Array(m)], topleft = 0, result = 0;
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (matrix[i][j] == 1) {
                    let top = (i == 0) ? 0 : counts[j]
                    let left = (j == 0) ? 0 : counts[j - 1]
                    counts[j] = 1 + Math.min(Math.min(top, left), topleft)
                    result += counts[j];
                    
                    topleft = (j == m - 1) ? 0 : top
                } else
                    counts[j] = 0
            }
        }
        return result
};