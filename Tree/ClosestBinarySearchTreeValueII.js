var closestKValues = function(root, target, k) {
    let res = []
    
    const inOrder = (root) => {
        if (!root) return
        inOrder(root.left)
        if (res.length == k) {
            if (Math.abs(target - root.val) < Math.abs(target - res[0])) res.shift()
            else return
        }
        res.push(root.val)
        inOrder(root.right, target, k, res)
    }
        
    inOrder(root)
    return res
};