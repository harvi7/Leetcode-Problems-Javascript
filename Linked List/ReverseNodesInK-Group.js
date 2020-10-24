var reverseKGroup = function(head, k) {
    if (head === null || k === 0) return head;
    const dummy = new ListNode(0)
    dummy.next = head
    let pointer = dummy
    while (pointer) {
        node = pointer
        for (var i = 0; i < k && node != null; i++)
            node = node.next
        if (node == null) break

        prev = null, curr = pointer.next, next = null
        for (var i = 0; i < k; i++) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        tail = pointer.next
        tail.next = curr
        pointer.next = prev
        pointer = tail
    }
    return dummy.next
};