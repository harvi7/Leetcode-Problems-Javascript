var findNearestRightNode = function(root, u) {
    if (root === null || u === null) return null
    let queue = [root]
    while (queue.length) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let cur = queue.shift()
            if (cur === u) {
                if (i === levelSize - 1) return null
                else return queue.shift()
            }
            if (cur.left !== null) queue.push(cur.left)
            if (cur.right !== null) queue.push(cur.right)
        }
    }
    return null
};