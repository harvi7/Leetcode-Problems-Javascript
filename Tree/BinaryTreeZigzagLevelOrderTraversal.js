var zigzagLevelOrder = function(root) {
    if (!root) return []
    let queue = [root], res = []

    while (queue.length > 0) {
        let [_next, level] = [[], []]
        for (let node of queue) {
            // add to level
            level.push(node.val)
            if (node.left) _next.push(node.left)
            if (node.right) _next.push(node.right)
        }
        queue = _next;
        if (res.length % 2 != 0) level.reverse()
        res.push(level)
    }
    return res
}