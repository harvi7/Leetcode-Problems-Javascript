var inorderTraversal = function(root) {
    if (!root) return []
    let left = inorderTraversal(root.left)
    let mid = root.val
    let right = inorderTraversal(root.right)
    return [...left, mid, ...right]
};