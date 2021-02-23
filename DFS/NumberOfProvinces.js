var findCircleNum = function(isConnected) {
    if (isConnected.length == 0 || isConnected[0].length == 0) return 0
    let count = 0
    let visited = new Array(isConnected.length).fill(false)
    for (let vertex = 0; vertex < isConnected.length; vertex++) {
        if (!visited[vertex]) {
            dfs(vertex, isConnected, visited);
            count++
        }
    }
    return count
};


function dfs(vertex, grid, visited) {
    visited[vertex] = true
    
    for (let to = 0; to < grid[vertex].length; to++) {
        if (grid[vertex][to] == 1 && !visited[to]) {
            dfs(to, grid, visited)
        }
    }
}   