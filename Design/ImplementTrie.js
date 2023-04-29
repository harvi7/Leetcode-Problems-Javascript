var Trie = function() {
    this.root = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    word.split('').forEach((char)=>{
        if (!node[char]) node[char] = {};
        node = node[char];
    })
    node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.searchNode(word);
    return node != null ? node.isWord == true : false
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.searchNode(prefix)
    return node != null
};

Trie.prototype.searchNode = function(word) {
    let node = this.root
    for (let char of word.split('')) {
        if (node[char]) {
            node = node[char]
        } else {
            return null
        }
    }
    return node
}