var treeToDoublyList = function(root) {
    
    if (root == null) return null
    let dummy = new Node(0)
    let prev = dummy
    
    let stack = []
    
    while (root!==null || stack.length!==0){
        
        while(root){
            stack.push(root)
            root = root.left
        }
        let current = stack.pop()
        prev.right = current
        current.left = prev
        prev = current
        
        root = current.right
    }
    
    dummy.right.left = prev
    prev.right = dummy.right
    return dummy.right
};