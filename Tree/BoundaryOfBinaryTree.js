// https://leetcode.com/problems/boundary-of-binary-tree/discuss/422964/Javascript-dfs-%2B-preorder

var boundaryOfBinaryTree = function(root) {
    if (!root) return [];
	let leftReached = false, rightReached = false;
    const pathL = [], pathR = [];
   
    const helper = (node, order) => {
        if (!node) return;
        
        if (order === 0) {
            if (!leftReached || (!node.left && !node.right)) pathL.push(node.val);
            helper(node.left, 0);
            if (node.left) leftReached = true;
            helper(node.right, 0);
        } else {
            if (!rightReached || (!node.left && !node.right)) pathR.push(node.val);
            helper(node.right, 1);
            if (node.right) rightReached = true;
            helper(node.left, 1);        
        }
    };
    
    helper(root.left, 0);
    helper(root.right, 1);
    
    return [root.val, ...pathL, ...pathR.reverse()];
};