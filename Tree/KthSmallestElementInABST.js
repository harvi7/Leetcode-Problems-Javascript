var kthSmallest = function(root, k) {
    let ans = -Infinity
    let go = root => {
        if (k && root.left) go(root.left)
        if (!--k) ans = root.val
        if (k && root.right) go(root.right)
    }
    go(root)
    return ans
};