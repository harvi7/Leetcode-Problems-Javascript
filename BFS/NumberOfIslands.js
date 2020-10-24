var numIslands = function(grid) {
    let count = 0
    const BFS = (j, i) => {
        if (j >= 0 && i >= 0 && j < grid.length && i < grid[0].length && grid[j][i]==='1') {
            grid[j][i] = '0'
            BFS(j + 1, i)
            BFS(j - 1, i)
            BFS(j, i + 1)
            BFS(j, i - 1)
        } 
    }
    grid.forEach((col, j) => {
        col.forEach((elem, i) => {
            if (elem === '1') {
                count++
                BFS(j, i)
            }
        })
    })
    return count
};