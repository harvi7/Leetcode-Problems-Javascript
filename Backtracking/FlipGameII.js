var winMap = new Map();
var canWin = function(s) {
    if (winMap.has(s)) return winMap.get(s);
    for (let i = 0; i < s.length - 1; i++)
        if (s[i] === '+' && s[i + 1] === '+') {
            if (!canWin(s.slice(0, i) + '--' + s.slice(i + 2))) {
                winMap.set(s, true);
                return true;
            }
        }
    winMap.set(s, false);
    return false;
};