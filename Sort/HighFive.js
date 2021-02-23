var highFive = function(items) {
    const scoreBoard = {}
    for (const [id, score] of items) {
        if (scoreBoard[id])
            scoreBoard[id].push(score)
        else 
            scoreBoard[id] = [score]
    }
    const getAverage = (res, student) => {
        const topFive = scoreBoard[student]
        .sort((a, b) => b - a)
        .reduce((total, curr, i) => {
            if (i < 5) total += curr
            return total
        })
        res.push([student, Math.floor(topFive / 5)])
        return res
    }
    return Object.keys(scoreBoard).reduce(getAverage, [])
};