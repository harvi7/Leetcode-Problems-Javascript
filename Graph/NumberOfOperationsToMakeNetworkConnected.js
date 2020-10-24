var makeConnected = function(n, connections) {
    if(connections.length < n - 1) {
        return -1;
    }
    let adj = []
    
    for (let i = 0; i < n; i++) {
        adj[i] = []
    }
    
    for (let [u, v] of connections) {
        adj[u].push(v)
        adj[v].push(u)
    }
    
    const visited = new Set();
    
    const dfs = (node, parent) => {
        let nodes = adj[node]
        
        for(let n of nodes){
            if (n === parent) {
                continue
            }
            if(!visited.has(n)) {
                visited.add(n)
                dfs(n, node)
            }
        }
    }
    
    let components = 0;
    
    for (let i = 0; i < n; i++){
        if (!visited.has(i)) {
            visited.add(i)
            components++
            dfs(i)
        }
    }
    
    return connections.length >= n - 1 ? components - 1 : -1
};