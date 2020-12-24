var cherryPickup = function(grid) {
    const m = grid.length,  n = grid[0].length
    const cache = {}

    return bestFromPosition(0, 0, n - 1)
    
    function bestFromPosition(row, col1, col2) {
        if (row >= m || col1 < 0 || col1 >= n || col2 < 0 || col2 >= n)
            return 0
        const key = toKey(row, col1, col2)
        if (cache[key] !== undefined) return cache[key]

        let cherries = grid[row][col1] + (grid[row][col2] * (col1 !== col2))

        let max = 0

        for (let i = -1; i <= 1; i++)
            for (let j = -1; j <= 1; j++)
                max = Math.max(
                    max,
                    bestFromPosition(row + 1, col1 + i, col2 + j)
                )
        return cache[key] = cherries + max
    }
}


const toKey = (row, col1, col2) => `${row}‿︵${col1}-${col2}`