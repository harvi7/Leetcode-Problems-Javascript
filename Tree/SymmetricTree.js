var isSymmetric = function(root) {
    function isMirror(node1, node2) {
        if (!node1 && !node2) return true
        if (!node1 || !node2) return false
        if (node1.val != node2.val) return false
        return node1.val == node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
    }
    
    if (!root) return true
    
    return isMirror(root.left, root.right)
};