var leadsToDestination = function(n, edges, source, destination) {
    let graph = new Map() // adj list
    
    for (let [edge1,edge2] of edges) {
        if (!graph.has(edge1)) {
            graph.set(edge1, [])
        }
        graph.get(edge1).push(edge2)
    }
    if (graph.has(destination)) return false // destination should have zero outgoing edges
    
    let visited = new Set()
    
    function dfs(node) {
        if (!graph.has(node)) { // at a leaf after starting at source. has to be destination
            return node === destination
        }
        
        for (let neighbor of graph.get(node)) {
            if (visited.has(neighbor)) return false // cycle detected
            visited.add(neighbor)
            if (!dfs(neighbor)) return false
            visited.delete(neighbor)
        }
        return true
    }
    
    return dfs(source)
}
    