var pathSum = function(root, targetSum) {
    const paths = []
    
    const findAllSubsets = (node, sum, path) => {
        if (!node) return
        
        if (!node.left && !node.right) {
            if (sum + node.val === targetSum) paths.push([...path, node.val])
            return
        }
        findAllSubsets(node.left, sum + node.val, [...path, node.val])
        findAllSubsets(node.right, sum + node.val, [...path, node.val])
    }
    
    findAllSubsets(root, 0, [])
    return paths
};