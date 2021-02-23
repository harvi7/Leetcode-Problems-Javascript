var depthSum = function(nestedList) {
    return helper(nestedList, 1)
};

const helper = (list, depth) => {
    let sum = 0
    for (let n of list) {
        if (n.isInteger()) {
            sum += n.getInteger() * depth
        } else {
            sum += helper(n.getList(), depth + 1)
        }
    }
    return sum
}