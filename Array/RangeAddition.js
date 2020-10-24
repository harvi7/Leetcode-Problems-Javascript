var getModifiedArray = function(length, updates) {
    var res = []
    for (let i = 0; i < length; i++) 
        res[i] = 0

    updates.forEach(update => {
        let value = update[2], start = update[0], end = update[1]
        res[start] += value
        res[end + 1] -= value
    });

    res.length = length
    let sum = 0
    for (let i = 0; i < length; i++) {
        sum += res[i]
        res[i] = sum
    } 
    return res
};