var addTwoNumbers = function(l1, l2) {
    let ans = new ListNode(), curr = ans, carry = 0
    for (;;) {
        curr.val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
        carry = Math.floor(curr.val / 10);
        curr.val %= 10
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        if (!l1 && !l2 && !carry)
            break;
        curr = curr.next = new ListNode()
    }   
    return ans;
};