var insertionSortList = function(head) {
    if (!head || !head.next) return head
        
    let preInsert = null, toInsert = null
    const dummyHead = new ListNode(0)
    dummyHead.next = head

    while (head && head.next) {
        if (head.val <= head.next.val) {
            head = head.next;
        } else {      
            toInsert = head.next;
            preInsert = dummyHead;
            while (preInsert.next.val < toInsert.val) {
                preInsert = preInsert.next;
            }
            head.next = toInsert.next;
            toInsert.next = preInsert.next;
            preInsert.next = toInsert;
        }
    }
    return dummyHead.next
};