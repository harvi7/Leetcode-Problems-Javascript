var insertIntoBST = function(root, val) {
    if (root == null) return new TreeNode(val)
    let curr = root
    while (curr.val !== val) {
        if (curr.val < val) {
            if (!curr.right) {
                curr.right = new TreeNode(val)
                break
            }
            curr = curr.right
        } else { 
            if (!curr.left) {
                curr.left = new TreeNode(val)
                break
            }
            curr = curr.left
        }
    } 
    return root
};