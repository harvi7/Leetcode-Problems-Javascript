var maxAncestorDiff = function(root) {
    if (root == null) return 0
    return helper(root, root.val, root.val)
};

const helper = (node, curMax, curMin) => {
    if (!node) return curMax - curMin

    curMax = Math.max(curMax, node.val)
    curMin = Math.min(curMin, node.val)
    const left = helper(node.left, curMax, curMin)
    const right = helper(node.right, curMax, curMin)
    return Math.max(left, right)
}