var sortedListToBST = function(head) {
    
    const convertListToBST = (l, r) => {
        if (l > r) return null

        let mid = Math.floor((l + r) / 2)
        let left = convertListToBST(l, mid - 1)
        let node = new TreeNode(head.val)
        node.left = left

        head = head.next

        node.right = convertListToBST(mid + 1, r)
        return node
    }
    
    let size = findSize(head)
    return convertListToBST(0, size - 1)
};

const findSize = (head) => {
    let ptr = head, c = 0
    while (ptr) {
      ptr = ptr.next  
      c += 1
    }
    return c
}