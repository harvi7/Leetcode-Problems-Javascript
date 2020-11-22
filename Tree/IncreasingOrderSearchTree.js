var increasingBST = function(root) {
    const ans = new TreeNode(0)
    let cur = ans
    const inorder = (node) => {
        if (node.left) inorder(node.left)
        if (cur && !cur.right) 
            cur.right = new TreeNode(node.val)
        cur = cur.right
        if (node.right) 
            inorder(node.right)
    }
    inorder(root)
    return ans.right
};