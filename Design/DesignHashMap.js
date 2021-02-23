var MyHashMap = function() {
    this.key_space = 2096
    this.hash_table = [...new Array(this.key_space + 1)].map(
      (_) => new Bucket()
    )
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const hashKey = key % this.key_space
    this.hash_table[hashKey].push(key, value)
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const hashKey = key % this.key_space
    return this.hash_table[hashKey].get(key)
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const hashKey = key % this.key_space
    this.hash_table[hashKey].remove(key)
};

class Bucket {
  constructor() {
    this.data = []
  }

  push = (k, v) => {
    for (let [i, { key, val }] of this.data.entries()) {
      if (key === k) {
        this.data[i].val = v
        return
      }
    }
    this.data.push({ key: k, val: v })
  }

  get = (k) => {
    for (let { key, val } of this.data) {
      if (key === k) return val
    }
    return -1
  }

  remove = (k) => {
    this.data = this.data.filter((d) => k !== d.key)
  }
}