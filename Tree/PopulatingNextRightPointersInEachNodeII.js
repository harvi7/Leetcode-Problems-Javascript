var connect = function(root) {
    let parent = root
    let childHead = null, child = null
    while (parent != null) {
        while (parent != null) {
            if (parent.left != null) {
                if (childHead == null)
                    childHead = parent.left
                else
                    child.next = parent.left
                child = parent.left
            } 

            if (parent.right != null) {
                if (childHead == null)
                    childHead = parent.right
                else
                    child.next = parent.right
                child = parent.right
            }
            parent = parent.next
        }
        parent = childHead
        childHead = child = null
    }
    return root
};