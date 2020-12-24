var ValidWordAbbr = function(dictionary) {
    this.dic = {}
    dictionary.forEach(function(word) {
        if (!word) return;
        var abbr = toAbbr(word)
        if(abbr in this.dic) {
            var x = this.dic[abbr]
            if (x) {
                if(x !== word) this.dic[abbr] = false
            }
        }
        else {
            this.dic[abbr] = word
        }
    }, this)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    if (!word) return true
    var abbr = toAbbr(word)
    if(abbr in this.dic) {
        var wordSet = this.dic[abbr]
        if(!wordSet) return false
        else return wordSet === word
    }
    else return true
};

function toAbbr(s) {   
    let n = s.length
    if (n <= 2) {
        return s
    }
    return s.charAt(0) + (n - 2) + s.charAt(n - 1)
}