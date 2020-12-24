var isValidBST = function(root) {
    if (root == null) return true
    return helper(root, Number.MIN_SAFE_INTEGER , Number.MAX_SAFE_INTEGER )
};

const helper = (root, min, max) => {
    if (root == null) return true
    if (root.val <= min || root.val >= max) return false
    return helper(root.left, min, root.val) && helper(root.right, root.val, max)
}