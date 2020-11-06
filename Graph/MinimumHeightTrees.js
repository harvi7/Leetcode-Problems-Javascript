var findMinHeightTrees = function(n, edges) {
    if (n <= 0) return []
    if (n == 1) return [0]
    
    const graph = Array.from({length: n}, () => Array())
    const inDegree = Array(n).fill(0);
    
    for (const edge of edges) {
        const vertex1 = edge[0], vertex2 = edge[1]
        graph[vertex1].push(vertex2)
        graph[vertex2].push(vertex1)
        inDegree[vertex1]++
        inDegree[vertex2]++
    }
    
    const leaves = []
    inDegree.forEach((inDeg, vertex) => {
        if (inDeg == 1) {
            leaves.push(vertex)
        }
    })
    
    let totalVertices = n
    while (totalVertices > 2) {
        const len = leaves.length
        totalVertices -= len
        for (let i = 0; i < len; i++) {
            const leaf = leaves.shift()
            const children = graph[leaf]
            for (const child of children) {
                if (--inDegree[child] == 1) {
                    leaves.push(child);
                }
            }
        }
    }
    
    return leaves
};