var getDecimalValue = function(head) {
    let num = head.val
    while (head.next != null) {
        num = (num << 1) + head.next.val
        head = head.next  
    }
    return num
}