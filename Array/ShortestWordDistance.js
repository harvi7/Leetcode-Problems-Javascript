var shortestDistance = function(words, word1, word2) {
    let index1 = -1, index2 = -1, minDiff = words.length;
    const updateDiff = () => {
        minDiff = Math.min(minDiff, Math.abs(index1 - index2));
    }
    words.forEach((word, index) => {
        if (word1 === word) {
            index1 = index;
            if (index2 > -1) updateDiff();
        } else if(word2 === word) {
            index2 = index;
            if(index1 > -1) updateDiff();
        }

    })
    return minDiff;
};