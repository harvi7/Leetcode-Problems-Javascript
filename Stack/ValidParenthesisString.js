var checkValidString = function(s) {
    const open = []
    const star = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') open.push(i);
        else if (s[i] == '*')
            star.push(i);
        else {
            if (open.length > 0) open.pop();
            else if (star.length > 0) star.pop();
            else return false;
        }
    }

    while (open.length > 0) {
        if (star.length === 0) return false;
        else if(open[open.length - 1] < star[star.length - 1]) {
            open.pop();
            star.pop();
        }
        else return false;
    }
    return true;
};