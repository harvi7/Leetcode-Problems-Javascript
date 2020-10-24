var bstFromPreorder = function(preorder) {
    if (!preorder.length)  return null;
    
    const root = new TreeNode(preorder[0])
    let stack = [root], child
    for (let i = 1, curr; i < preorder.length; i++) {
        child = new TreeNode(preorder[i])
        node = stack[0]
        
        while (stack.length != 0 && stack[0].val < child.val)
            node = stack.shift()
        if (node.val > child.val)
            node.left = child
        else node.right = child
        stack.unshift(child)
    }
    return root
}