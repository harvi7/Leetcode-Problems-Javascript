var mergeKLists = function(lists) {
    let numsArr = []
    lists.forEach(listHead => {
        while (listHead && listHead.val !== null) {
          numsArr.push(listHead.val)
          listHead = listHead.next
        }
    });
    
    numsArr = numsArr.sort((a, b) => b - a)
    let resultNode = null
    numsArr.forEach(item => {
        let tempNode = new ListNode(item)
        tempNode.next = resultNode
        resultNode = tempNode
    })
    return resultNode
};