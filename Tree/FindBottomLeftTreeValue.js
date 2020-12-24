var findBottomLeftValue = function(root) {
    let queue = []
    queue.push(root)
    while (queue.length > 0) {
        root = queue.shift()
        if (root.right) queue.push(root.right)
        if (root.left) queue.push(root.left)
    }
    return root.val
};