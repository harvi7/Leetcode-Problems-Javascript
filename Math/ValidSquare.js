var validSquare = function(p1, p2, p3, p4) {
    const getSide = (a, b) => Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
    const getSidesAreEqual = arr => !arr.filter(elem => !elem || elem !== arr[0]).length;
    
    const sidesAndDiagonals = [
        getSide(p1, p2),
        getSide(p1, p3),
        getSide(p1, p4),
        getSide(p2, p3),
        getSide(p2, p4),
        getSide(p3, p4)
    ].sort((a, b) => a - b);
    
    const sides = sidesAndDiagonals.slice(0, 4);
    const diagonals = sidesAndDiagonals.slice(4);
    
    return getSidesAreEqual(sides) && getSidesAreEqual(diagonals);
};