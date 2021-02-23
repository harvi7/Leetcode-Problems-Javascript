class TrieNode{
    constructor(){
        this.children = new Map()
        this.score = 0
    }
}

var MapSum = function() {
    this.root = new TrieNode();
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    let delta = val - (this.map.get(key) ? this.map.get(key) : 0)
    this.map.set(key, val)
    let cur = this.root
    cur.score += delta
    for (const c of key) {
        if (!cur.children.has(c))
            cur.children.set(c, new TrieNode())
        cur = cur.children.get(c)
        cur.score += delta
    }
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let cur = this.root
    for (const c of prefix) {
        cur = cur.children.get(c)
        if (cur == null) return 0
    }
    return cur.score
};