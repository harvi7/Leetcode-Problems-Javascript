var possibleBipartition = function(N, dislikes) {
    let adj = new Array(N + 1)    
    let groups = new Array(N + 1).fill(-1)
    
    for(let i = 1; i < N+1; i++)
        adj[i] = []
    
    for (let i of dislikes) {
        let [u, v] = i
        adj[u].push(v)
        adj[v].push(u)
    }
    
    for(let i = 1; i < N+1; i++)
        if (groups[i] == -1 && !dfs(adj, groups, i, 1))
                return false

    return true
};

const dfs = function(adj, groups, v, grp) {
    if (groups[v] !== -1) 
        return groups[v] == grp
    
    groups[v] = grp
    
    for (let n of adj[v])
        if (!dfs(adj, groups, n, 1 - grp)) return false
    
    return true
}