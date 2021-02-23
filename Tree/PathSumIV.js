var pathSum = function(nums) {
    let ans = 0
    let root = new Node(nums[0] % 10);
    for (let num of nums) {
        if (num == nums[0]) continue
        let depth = num / 100, pos = num / 10 % 10, val = num % 10
        pos--
        let cur = root
        for (let d = depth - 2; d >= 0; --d) {
            if (pos < 1 << d) {
                if (cur.left == null) cur.left = new Node(val)
                cur = cur.left
            } else {
                if (cur.right == null) cur.right = new Node(val)
                cur = cur.right
            }
            pos %= 1 << d
        }
    }
    
    const dfs = (node, sum) => {
        if (node == null) return
        sum += node.val
        if (node.left == null && node.right == null) {
            ans += sum
        } else {
            dfs(node.left, sum)
            dfs(node.right, sum)
        }
    }

    dfs(root, 0)
    return ans
};

class Node {
    constructor (val) {
        this.val = val
        this.left = null
        this.right = null
    }
}