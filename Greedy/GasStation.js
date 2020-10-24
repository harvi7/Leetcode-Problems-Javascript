var canCompleteCircuit = function(gas, cost) {
    if (gas.reduce((a, b) => a + b, 0) - cost.reduce((a, b) => a + b, 0) < 0) return -1 
    let tank = 0, startpos = 0              
    for (let i = 0; i < gas.length; i++) {   
        tank += (gas[i] - cost[i])
        if (tank < 0) {
            startpos = i + 1
            tank = 0
        }
    }
    return startpos
};