var reverseBetween = function(head, m, n) {
    if (!head) return null

    let cur = head, prev = null
    while (m > 1) {
        prev = cur
        cur = cur.next
        m--
        n--
    }

    let connection = prev, tail = cur
    while (n > 0) {
        let nextNode = cur.next
        cur.next = prev
        prev = cur
        cur = nextNode
        n--
    }

    if (connection) {
        connection.next = prev
    } else {
        head = prev
    }

    tail.next = cur
    return head
};