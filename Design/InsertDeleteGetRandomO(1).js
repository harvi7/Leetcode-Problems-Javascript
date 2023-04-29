var RandomizedSet = function() {
    this.map = new Map();
    this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) {
        return false
    }
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) {
        return false;
    }
    let toRemoveIndx = this.map.get(val);
    let lastEl = this.arr[this.arr.length - 1];
    this.arr[toRemoveIndx] = lastEl;
    this.map.set(lastEl, toRemoveIndx);
    this.arr.pop();
    this.map.delete(val);
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random() * this.arr.length)]
};