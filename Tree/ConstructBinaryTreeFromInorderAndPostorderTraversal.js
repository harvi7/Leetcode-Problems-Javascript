var buildTree = function(inorder, postorder) {
    let inStart = 0, inEnd = inorder.length - 1
    let postStart = 0, postEnd = postorder.length - 1
        
    return helper(inorder, inStart, inEnd, postorder, postStart, postEnd)
};

const helper = (inorder, inStart, inEnd, postorder, postStart, postEnd) => {
    if (inStart > inEnd || postStart > postEnd)
        return null
    let rootValue = postorder[postEnd]
    let root = new TreeNode(rootValue)
    let k = 0;
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] == rootValue) {
            k = i
            break
        }
    }
    root.left = helper(inorder, inStart, k - 1, postorder, postStart, postStart + k - (inStart + 1))
    root.right = helper(inorder, k + 1, inEnd, postorder, postStart + k - inStart, postEnd - 1)

    return root   
}