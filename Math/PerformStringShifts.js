var stringShift = function(s, shift) {
    let leftShifts = 0
    for ([direction, amount] of shift) {
        direction == 1 ? leftShifts -= amount : leftShifts += amount
    }
    leftShifts %= s.length
    return s.slice(leftShifts) + s.slice(0, leftShifts)
};