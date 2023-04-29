var findSecondMinimumValue = function(root) { 
    let ans = Infinity
    let min1 = root.val
    
    const dfs = (root) => {
        if (root) {
            if (min1 < root.val && root.val < ans) {
                ans = root.val;
            } else if (min1 == root.val) {
                dfs(root.left)
                dfs(root.right)
            }
        }
    }
    
    dfs(root)
    return ans < Infinity ? ans : -1
};