var findTilt = function(root) {
    const traverse = (root) => {
        if (root == null)
            return 0
        
        const left = traverse(root.left), right = traverse(root.right)        
        tilt += Math.abs(left - right)
        return left + right + root.val
    }
    let tilt = 0
    traverse(root)
    return tilt
};