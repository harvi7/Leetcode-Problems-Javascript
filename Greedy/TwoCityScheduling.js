var twoCitySchedCost = function(costs) {
    return costs.sort(([a1, b1], [a2, b2]) => (a1 - b1) - (a2 - b2))           
        .reduce((sum, [a, b], i) => sum + (i < costs.length / 2 ? a : b), 0);
};