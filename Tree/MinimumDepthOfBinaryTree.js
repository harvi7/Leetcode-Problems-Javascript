var minDepth = function(root) {
    
    if (!root) return 0;
    const queue = [root]
    let depth = 1
    while (queue) {
        let l = queue.length
        for (let i = 0; i < l; i++) {
            const n = queue.shift()
            if (!n.left && !n.right) return depth
            if (n.left) queue.push(n.left)
            if (n.right) queue.push(n.right)
        }
        depth++
    }
    return depth
};