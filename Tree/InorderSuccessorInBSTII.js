var inorderSuccessor = function(node) {
    if (node.right) {
        node = node.right
        while (node.left != null) node = node.left
        return node
    }

    while (node.parent && node == node.parent.right) node = node.parent
    return node.parent
};