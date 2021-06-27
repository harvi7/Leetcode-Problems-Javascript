var uniqueMorseRepresentations = function(words) {
    const morse=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."], seen = []
    
    words.forEach((word) => {
       let str = ''
       for (let i = 0; i < word.length; i++) {
           str += morse[word[i].charCodeAt() - 97]
       }
       seen.push(str)
    })
    return [...new Set(seen)].length
};