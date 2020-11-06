var maxPathSum = function(root) {
    let sum = root.val;           
    const recMaxSum = (node) => {
        if (!node) return 0;
        const left = Math.max(recMaxSum(node.left), 0),
              right = Math.max(recMaxSum(node.right), 0)
        sum = Math.max(left + right + node.val, sum)
        return Math.max(left, right) + node.val
    }
    recMaxSum(root)
    return sum
};