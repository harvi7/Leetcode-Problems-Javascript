// https://leetcode.com/problems/validate-stack-sequences/discuss/569629/JavaScript-ES6-solution

var validateStackSequences = function(pushed, popped) {
    const stack = []
    return pushed.reduce((popIndex, curr) => {
        stack.push(curr);
        while (stack.length && popIndex < pushed.length && popped[popIndex] === stack[stack.length - 1]) {
            stack.pop();
            popIndex++;
        }
        return popIndex;
    }, 0) === pushed.length;
};