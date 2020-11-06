var deleteNodes = function(head, m, n) {
    let currentNode = head, lastMNode = head
    while (currentNode) {
        var mCount = m, nCount = n
        while (currentNode && mCount != 0) {
            lastMNode = currentNode
            currentNode = currentNode.next
            mCount--
        }
        while (currentNode && nCount != 0) {
            currentNode = currentNode.next
            nCount--
        }
        lastMNode.next = currentNode
    }
    return head
};