var asteroidCollision = function(asteroids) {
    let stack = []

    const canReduceStack = () => {
        if(stack.length < 2) return false
        let [previous, current] = [stack[stack.length - 2], stack[stack.length - 1]]
        return current < 0 && previous > 0
    }

    const reduceStack = () => {
        let [curr, prev] = [stack.pop(), stack.pop()]
        let [acurr, aprev] = [Math.abs(curr), Math.abs(prev)]
        if (acurr === aprev) return
        if (acurr > aprev) stack.push(curr)
        else stack.push(prev)
    };

    asteroids.forEach(current => {
        stack.push(current)
        while(canReduceStack()){
            reduceStack()
        }
    })

    return stack
};