var buildTree = function(preorder, inorder) {
    let map = new Map()

    for (let i = 0; i < inorder.length; i++)
        map.set(inorder[i], i)
    
    function helper(preStart, preEnd, inStart, inEnd) {
        if (preStart > preEnd || inStart > inEnd) return null
        
        let index = map.get(preorder[preStart])
        let leftTreeNodeCount = index - inStart
        let root = new TreeNode(preorder[preStart]);

        root.left = helper(preStart + 1, preStart + leftTreeNodeCount, inStart, index - 1);
        root.right = helper(preStart + leftTreeNodeCount + 1, preEnd, index + 1, inEnd);
        return root;
    }    
    
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};