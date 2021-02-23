var WordDistance = function(words) {
    this.words = words
    this.indexes = words
        .reduce((map, word, i) => {
          map[word] = (map[word] || []).concat(i)
          return map
        }, {})
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    const loc1 = this.indexes[word1]
    const loc2 = this.indexes[word2]

    let min = Infinity

    for (let l1 of loc1) {
        for (let l2 of loc2) {
          min = Math.min(min, Math.abs(l2 - l1))
        }
    }

    return min
};