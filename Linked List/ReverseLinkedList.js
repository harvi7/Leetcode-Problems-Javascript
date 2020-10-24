var reverseList = function(head) {
    if (!head) return null;
    let prev = null, curr = head
    while (curr) {
        let nextTemp = curr.next
        curr.next = prev
        prev = curr
        curr = nextTemp
    }
    return prev
};