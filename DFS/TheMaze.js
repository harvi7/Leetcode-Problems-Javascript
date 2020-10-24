const dir = [[-1,0], [1,0], [0,-1], [0,1]] 

var hasPath = function(maze, start, destination) {
    if (start[0] === destination[0] && start[1] === destination[1]) return true
  
    for (let [y, x] of dir){
        let [r, c]  = start
        while (r >= 0 && r < maze.length && c >= 0 && c < maze[r].length && maze[r][c] !== 1){
          r += y
          c += x
        }
        r -= y
        c -= x

        if (maze[r][c] !== 0) continue
        maze[r][c] = 2

        if (hasPath(maze, [r,c], destination)) return true
    }
    return false
};