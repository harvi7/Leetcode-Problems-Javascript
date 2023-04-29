var longestConsecutive = function(root) {
    let longestPath = 0;
    
    const findLongestPaths = (node) => {
        if (node == null) return [0, 0]
        
        const [leftInc, leftDec] = findLongestPaths(node.left)
        const [rightInc, rightDec] = findLongestPaths(node.right)
        
        let dcr = 1, inr = 1
        
        if (node.left) {
            if (node.val == node.left.val + 1) dcr = leftDec + 1
            else if (node.val == node.left.val - 1) inr = leftInc + 1
        }
        
        if (node.right) {
            if (node.val == node.right.val + 1) dcr = Math.max(dcr, rightDec + 1)
            else if (node.val + 1 == node.right.val) inr = Math.max(inr, rightInc + 1)
        }
    
        longestPath = Math.max(longestPath, dcr + inr - 1)
        return [inr , dcr]
    }
    
    findLongestPaths(root);
    return longestPath;
}