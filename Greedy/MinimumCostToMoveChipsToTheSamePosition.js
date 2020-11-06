var minCostToMoveChips = function(position) {
    let even = position.reduce( (a,b) => a + +!(b % 2), 0);
    return Math.min(even, position.length - even);
};