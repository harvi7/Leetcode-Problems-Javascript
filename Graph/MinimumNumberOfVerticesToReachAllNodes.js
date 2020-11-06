var findSmallestSetOfVertices = function(n, edges) {
    let all = new Set([...Array(n).keys()])
    edges.forEach(([_, tail]) => all.delete(tail))
    return [...all]
};