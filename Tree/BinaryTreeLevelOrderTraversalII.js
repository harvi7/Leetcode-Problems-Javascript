var levelOrderBottom = function(root) {
    if (!root) return []
    let res = []
    let queue = [root]
    while (queue.length) {
        res.push([...queue.map(node => node.val)])
        queue = queue.reduce((acc, node) => {
            node.left && acc.push(node.left)
            node.right && acc.push(node.right)
            return acc
        }, [])
    }
    return res.reverse()
};