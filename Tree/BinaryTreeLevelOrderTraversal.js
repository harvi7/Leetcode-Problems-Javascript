var levelOrder = function(root) {
    const levels = []
    if (!root) return levels

    const queue = []
    queue.push(root)
    
    while(queue.length){
        const level = []
        let s = queue.length
        for(let i = 0; i < s; i++) {
            const node = queue.shift()
            level.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        levels.push(level)
    }
    return levels
};