var TwoSum = function() {
    this.numCounts = new Map();
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.numCounts.set(number, (this.numCounts.get(number) || 0) + 1);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (const [key, val] of this.numCounts.entries()) {
        let target = value - key
        if (this.numCounts.has(target)) {
            if (key == target && val < 2)
                    continue
                return true
        }
    }
    return false
};