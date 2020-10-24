var generatePossibleNextMoves = function(s) {
    const res = []
    for (let i = 0; i < s.length; i++) {
        const temp = s
        if (s[i] === '+' && s[i] === s[i + 1]) {
            s = s.substring(0, i) + '--' + s.substring(i + 2)
            res.push(s)
        }
        s = temp
    }
    return res
};