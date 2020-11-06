var shiftingLetters = function(S, shifts) {
    const shift = (char, by) =>
        String.fromCharCode(97 + (char.charCodeAt(0) + by - 97) % 26)
    
    let ans = ''
    let shiftsCount = 0;
    for (let i = S.length - 1; i >= 0; i--) {
        shiftsCount += shifts[i];
        ans = shift(S[i], shiftsCount) + ans
    }
    return ans
};