var addTwoNumbers = function(l1, l2) {
    var s1 = [], s2 = []

    while (l1) {
        s1.push(l1.val)
        l1 = l1.next
    }
    while(l2) {
        s2.push(l2.val)
        l2 = l2.next
    }

    var sum = 0, res = new ListNode(0);
    while(s1.length > 0 || s2.length > 0) {
        if (s1.length > 0) sum += s1.pop()
        if (s2.length > 0) sum += s2.pop()
        res.val = sum % 10
        var head = new ListNode((sum / 10) >>0)
        head.next = res
        res = head
        sum = (sum / 10) >> 0
    }
    return res.val === 0 ? res.next : res
};