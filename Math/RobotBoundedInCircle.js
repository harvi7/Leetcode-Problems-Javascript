var isRobotBounded = function(instructions) {
    let x = y = i = 0
    d = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    for (let j = 0; j < instructions.length; j++)
        if (instructions[j] === 'R')
            i = (i + 1) % 4
        else if (instructions[j] === 'L')
            i = (i + 3) % 4
        else {
            x += d[i][0]
            y += d[i][1]  
        } 
    return x === 0 && y === 0 || i > 0
};