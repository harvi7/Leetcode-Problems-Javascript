var serialize = function(root) {
    if (!root) return ''
    return "" + root.val + ',' + serialize(root.left) + ',' + serialize(root.right)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const arr = data.split(',')
    return helper(arr)
    
    function helper(arr) {
        const val = arr.shift()
        if (!val) return null 
        const node = new TreeNode(val)
        node.left = helper(arr)
        node.right = helper(arr)
        return node
    }
};
