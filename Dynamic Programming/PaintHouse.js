var minCost = function(costs) {
    let c0 = 0, c1 = 0, c2 = 0

    for (let cost of costs) {
        [c0, c1, c2] = [
          cost[0] + Math.min(c1, c2),
          cost[1] + Math.min(c0, c2),
          cost[2] + Math.min(c0, c1),
        ]
    }

    return Math.min(c0, c1, c2)
};