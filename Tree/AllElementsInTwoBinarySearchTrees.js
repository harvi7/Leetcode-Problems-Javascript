// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/discuss/867705/Clear-logic-with-explanation

var getAllElements = function(root1, root2) {
    let stack1 = [], stack2 = [];
    const result = [];
    
    const getLowestNode = (node, stack) => {
        if (!node) return;
        
        stack.push(node);
        getLowestNode(node.left, stack)
    }
    
    const addToStack = (stack) => {
        result.push(stack[stack.length-1].val);
        
        let node = stack.pop();
        getLowestNode(node.right, stack);
    }
    
    getLowestNode(root1, stack1);
    getLowestNode(root2, stack2);
    
    while (stack1.length > 0 || stack2.length > 0) {
        if (stack2.length === 0) {
            addToStack(stack1);
        } else if (stack1.length === 0) {
            addToStack(stack2);
        } else if (stack2[stack2.length-1].val > stack1[stack1.length-1].val) {
            addToStack(stack1);
        } else {
            addToStack(stack2);
        }
    }
    
    return result;
};