var escapeGhosts = function(ghosts, target) {
    source = [0, 0]
    for (let ghost of ghosts)
        if (taxi(ghost, target) <= taxi(source, target))
            return false
    return true
};

const taxi = (P, Q) => {
    return Math.abs(P[0] - Q[0]) + Math.abs(P[1] - Q[1])
}