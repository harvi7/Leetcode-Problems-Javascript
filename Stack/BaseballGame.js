var calPoints = function(ops) {
    let stack = []
    for (op of ops) {
        let n = stack.length
        if (op == '+')
            stack.push(stack[n - 2] + stack[n - 1])
        else if (op == 'D')
            stack.push(2 * stack[n - 1])
        else if (op == 'C')
            stack.pop()
        else
            stack.push(+op)
    }
    return _.sum(stack)
};