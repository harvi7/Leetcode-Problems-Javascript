var diameterOfBinaryTree = function(root) {
    let diameter = 0
    
    const dfs = (node) => {
        if (!node) return 0
        
        const left = dfs(node.left)
        const right = dfs(node.right)
        
        diameter = Math.max(diameter, left + right)
        return 1 + Math.max(left, right)
    }
    
    dfs(root)
    return diameter
};