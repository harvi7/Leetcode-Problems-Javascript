var recoverTree = function(root) {
    let firstNode = null, secondNode = null, prevNode = null
    
    const findSegments = (root) => {
        if (root == null) return
        findSegments(root.left)
        if (prevNode  && prevNode.val > root.val) {
            if (!firstNode )
                firstNode = prevNode
            secondNode = root
        }
        prevNode = root
        findSegments(root.right)
    }
    
    findSegments(root)
    let x = firstNode.val
    firstNode.val = secondNode.val
    secondNode.val = x
    
};