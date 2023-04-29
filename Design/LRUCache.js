// https://leetcode.com/problems/lru-cache/discuss/907472/Clean-JavaScript-implementation-with-Double-Linked-List

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.size = 0;
    this.capacity = capacity;
    
    this.lruMap = {};
    this.queue = new DLinkedList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const item = this.getItem(key);
    return item ? item.value : -1;
};

LRUCache.prototype.getItem = function(key) {
    const result = this.lruMap[key];
    if (result) {
        this.queue.moveToHead(result);
    }
    
    return result;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const currentItem = this.getItem(key);
    if (currentItem) {
        currentItem.value = value;
        return;
    }
    
    this.size++;
    const newItem = new DLinkedNode(key, value);
    this.queue.addNode(newItem);
    this.lruMap[key] = newItem;
    
    this.cleanup();
};

LRUCache.prototype.cleanup = function() {
    while (this.size > this.capacity) {
        const lastItem = this.queue.popTail();
        delete this.lruMap[lastItem.key];
        
        this.size--;
    }
};

class DLinkedNode {
    constructor(key, value, prev, next) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

// Represents the double linked list that acts as a queue for us
class DLinkedList {
    constructor() {
        this.head = new DLinkedNode(-1, -1, null);
        this.tail = new DLinkedNode(-2, -2, this.head, null);
        this.head.next = this.tail;
    }
    
    addNode(node) {
        node.prev = this.head;
        node.next = this.head.next;
        
        // Always add the new node right after head.
        this.head.next.prev = node;
        this.head.next = node;
    }
    
    removeNode(node) {
        const prev = node.prev;
        const next = node.next;
        
        //Remove an existing node from the linked list.
        prev.next = next;
        next.prev = prev;
    }
    
    moveToHead(node) {
        this.removeNode(node);
        this.addNode(node);
    }
    
    popTail() {
        const result = this.tail.prev;
        this.removeNode(result);
        
        return result;
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */




// Another Solution using keys().next()

// var LRUCache = function(capacity) {
//     this.capacity = capacity
//     this.cache = new Map()
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//     if (!this.cache.has(key)) return -1
//     const value = this.cache.get(key)
//     this.cache.delete(key)
//     this.cache.set(key, value)
//     return value;
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//     this.cache.delete(key)
//     this.cache.set(key, value)
//     if (this.cache.size > this.capacity) 
//         this.cache.delete(this.cache.keys().next().value)
// };