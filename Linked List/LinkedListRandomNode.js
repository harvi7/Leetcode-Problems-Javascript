var Solution = function(head) {
    this.head = head
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let scope = 1, chosenValue = 0
    let curr = this.head
    while (curr != null) {
        if (Math.random() < 1.0 / scope)
            chosenValue = curr.val
        scope += 1
        curr = curr.next
    }
    return chosenValue
};