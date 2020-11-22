var hasPathSum = function(root, sum) {

    const helper = (root, curSum) => {
        if (!root) return false
        curSum -= root.val
        if (!root.left && !root.right && curSum == 0) {
            return true
        }
        return helper(root.left, curSum) || helper(root.right, curSum)
    }

    if (!root) return false
    return helper(root, sum)
};