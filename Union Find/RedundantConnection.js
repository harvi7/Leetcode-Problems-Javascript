var findRedundantConnection = function(edges) {
    let uf = [...Array(edges.length + 1)].map((_, i) => i);
    
    let find = x => {
        if (uf[x] == x) return x
        return uf[x] = find(uf[x])
    }
    
    let union = (a, b) => {
        a = find(a), b = find(b)
        if (a == b)
            return false
        uf[a] = b
        return true
    }
    
    for (let [u, v] of edges)
    if (!union(u, v))
        return [u, v]
    return null
};

