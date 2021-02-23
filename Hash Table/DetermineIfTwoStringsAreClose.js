var closeStrings = function(word1, word2) {
    if (word1.length != word2.length) return false
    let word1Map = Array(26).fill(0), word2Map = Array(26).fill(0)
    let offset = 'a'.charCodeAt(0)
    
    for (let w of word1) {
        word1Map[w.charCodeAt(0) - offset]++
    }
    
    for (let w of word2) {
        word2Map[w.charCodeAt(0) - offset]++
    }
    
    for (let i = 0; i < 26; i++){
        if (word1Map[i] == 0 && word2Map[i] != 0) return false
        if (word2Map[i] == 0 && word1Map[i] != 0) return false
    }
    
    word1Map.sort((a, b) => b - a)
    word2Map.sort((a, b) => b - a)
    
    for (let i = 0; i < 26; i++) {
        if (word1Map[i] != word2Map[i]) return false
    }
    return true
};