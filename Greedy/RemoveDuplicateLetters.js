var removeDuplicateLetters = function(s) {
    let count = new Array(26).fill(0)
    let used = new Array(26)
    let charString = s.split('')
    for (let char of charString) {
        count[char.charCodeAt() - 97]++
    }
    let stack = [], index = 0;
    for (let char of charString) {
        index = char.charCodeAt() - 97
        count[index]--
        if (used[index]) continue
        
        while(stack.length && char < stack[stack.length - 1] 
              && count[stack[stack.length - 1].charCodeAt() - 97] != 0) {
            used[stack.pop().charCodeAt() - 97] = false
        }
        stack.push(char)
        used[index] = true
    }
    
    let result = ""
    while (stack.length) {
        result = stack.pop() + result
    }
    return result
};