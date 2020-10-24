var plusOne = function(head) {
    const sentinel = new ListNode(0)
    sentinel.next = head
    var notNine = sentinel

    while (head != null) {
      if (head.val != 9) notNine = head
      head = head.next
    }

    notNine.val++;
    notNine = notNine.next

    while (notNine != null) {
      notNine.val = 0
      notNine = notNine.next
    }

    return sentinel.val != 0 ? sentinel : sentinel.next
};