var MyHashSet = function() {
    this.hashSet = new Array(769).fill(null)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if (!this.hashSet[key % 769]) {
        this.hashSet[key % 769] = new TreeNode(key)
    } else {
        this.hashSet[key % 769].add(key)
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if (!this.hashSet[key % 769]) return
    this.hashSet[key % 769] = this.hashSet[key % 769].remove(key)
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    if (!this.hashSet[key % 769]) return false
    return this.hashSet[key % 769].contains(key)
};

function TreeNode(x) {
    this.val = x
    this.left = null
    this.right = null
}

TreeNode.prototype.add = function(x) {
    if (!this) 
        return new TreeNode(x)
    if (x === this.val) 
        return this;
    else if (x < this.val)
        this.left = this.left ? this.left.add(x) : new TreeNode(x)
    else 
        this.right = this. right ? this.right.add(x) : new TreeNode(x)
    return this;
}

TreeNode.prototype.successor = function() {
    let node = this.right
    while (node.left) 
        node = node.left
    return node.val
}

TreeNode.prototype.predecessor = function() {
    let node = this.left
    while (node.right)
        node = node.right
    return node.val
}

TreeNode.prototype.remove = function(x) {
    if (!this) return null
    if (x === this.val) {
        if (this.right) {
            this.val = this.successor()
            this.right = this.val ? this.right.remove(this.val) : null
        } else if (this.left) {
            this.val = this.predecessor();
            this.left = this.val ? this.left.remove(this.val) : null
        } else {
            return null
        }
    } else if (x > this.val) {
        this.right = this.right ? this.right.remove(x) : null
    } else {
        this.left = this.left ? this.left.remove(x) : null
    } 
    return this
}

TreeNode.prototype.contains = function(x) {
    if (!this || x === this.val) {
        return this !== null
    }
    if (x < this.val) {
        return this.left !== null && this.left.contains(x)
    }
    return  this.right !== null && this.right.contains(x)
}