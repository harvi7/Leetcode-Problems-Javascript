var heightChecker = function(heights) {
    return [...heights]
    .sort((a, b) => a - b)
    .reduce((acc, cur, index) => (cur == heights[index] ? acc : acc + 1), 0)
};