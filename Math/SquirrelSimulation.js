var minDistance = function(height, width, tree, squirrel, nuts) {
    const [treeToNutSum, maxReductionBySquirrel] = nuts.reduce((prev, nut) => [
        prev[0] + dist(tree, nut),
        Math.max(prev[1], dist(tree, nut) - dist(squirrel, nut))
    ], [0, -Infinity])
    return 2 * treeToNutSum - maxReductionBySquirrel
}

function dist(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
}