/**
 * Initialize your data structure here.
 */
const Node = function(val=null, prev=null, next=null) {
    this.val = val
    this.prev = prev
    this.next = next
};

var MyLinkedList = function() {
    this.length = 0;
    this.head = new Node();
	this.tail = new Node();
    this.head.next = this.tail;
	this.tail.prev = this.head;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) return -1;
    if (index + 1 === this.length) return this.tail.prev.val;
    let curr = this.head.next;
    while (index--) curr = curr.next;
    return curr.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.length++;
    const nextNode = this.head.next;
    const node = new Node(val, this.head, nextNode);
    this.head.next = node, nextNode.prev = node;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.length++;
    const prevNode = this.tail.prev;
    const node = new Node(val, prevNode, this.tail);
    this.tail.prev = node, prevNode.next = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || this.length < index) return;
    if (index === this.length) {
        this.addAtTail(val);
        return;
    }
    this.length++;
    let curr = this.head;
    while (index--) curr = curr.next;
    const nextNode = curr.next;
    const node = new Node(val, curr, nextNode);
    curr.next = node, nextNode.prev = node;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (this.length <= index || index < 0) return;
    this.length--;
    if (index === this.length) {
        this.tail.prev = this.tail.prev.prev;
        return;
    }
    let curr = this.head;
    while(index--) curr = curr.next;
    curr.next = curr.next.next;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */