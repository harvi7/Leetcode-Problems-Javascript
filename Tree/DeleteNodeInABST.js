const helper = (root, key) => {
    if (!root.left && !root.right) return null
    if (!root.left) return root.right
    if (!root.right) return root.left
    let helper = root.right
    while (helper.left)
        helper = helper.left
    helper.left = root.left
    return root.right
}

var deleteNode = function(root, key) {
    if (!root) return root
        
    if (root.val == key) root = helper(root, key)
    else if (root.val < key) root.right = deleteNode(root.right, key)
    else root.left = deleteNode(root.left, key)
    return root
};
