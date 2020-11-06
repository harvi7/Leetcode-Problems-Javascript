var ladderLength = function(beginWord, endWord, wordList) {
    let res = 1
    let queue = [beginWord]
    const wordSet = new Set(wordList)
    if (!wordSet.has(endWord)) return 0 
    const seen = new Set(queue)

    while (queue.length) {
        const next = [];
        for (let word of queue) {
            if (word === endWord)
                return res
            const newWord = word.split('')
            for (let i = 0; i < newWord.length; i++) {
                for (let d = 0; d < 26; d++) {
                  newWord[i] = String.fromCharCode(97 + d)
                  const nv = newWord.join('')
                  if (!seen.has(nv) && wordSet.has(nv)) {
                    next.push(nv)
                    seen.add(nv)
                  }
                  newWord[i] = word[i]
                }
            }
        }
        queue = next
        res++
    }
    return 0
};