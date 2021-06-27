var verifyPreorder = function(preorder) {
    let stack = []
    var lastPopped = Number.MIN_SAFE_INTEGER;

    for (x of preorder) {
        if (lastPopped > x) return false
        while (stack && x > stack[stack.length - 1]) lastPopped = stack.pop()
        stack.push(x)
    }
    return true
};