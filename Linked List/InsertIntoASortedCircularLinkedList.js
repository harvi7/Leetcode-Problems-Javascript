var insert = function(head, insertVal) {
    let node = new Node(insertVal)
    if (!head) {
        node.next = node
        return node
    }

    let prev = head
    let curr = head.next
    let toInsert = false

    do {
      if (prev.val <= insertVal && insertVal <= curr.val) {
        toInsert = true
      } else if (prev.val > curr.val) {
        if (insertVal >= prev.val || insertVal <= curr.val)
          toInsert = true
      }

      if (toInsert) {
        prev.next = new Node(insertVal, curr)
        return head
      }

      prev = curr
      curr = curr.next
    } while (prev != head)

    prev.next = new Node(insertVal, curr)
    return head
};