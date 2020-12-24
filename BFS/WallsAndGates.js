var wallsAndGates = function(rooms) {
    const m = rooms.length
    if (m === 0) return
    const n = rooms[0].length
    if (n === 0) return
    const dirs = [[0,1],[0,-1],[-1,0],[1,0]]
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (rooms[row][col] === 0) {
                let q = [[row, col, 0]]
                while(q.length !== 0) {
                    const [row, col, dist] = q.shift()
                    if (rooms[row][col] > dist) rooms[row][col] = dist
                    dirs.forEach(dir => {
                        const r = row + dir[0], c = col + dir[1]
                        if (r >= 0 && r < m && c >= 0 && c < n && rooms[r][c] > dist + 1) q.push([r, c, dist + 1])
                    })
                }
            }
        }
    }
};