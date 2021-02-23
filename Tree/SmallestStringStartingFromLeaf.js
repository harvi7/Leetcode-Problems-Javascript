var smallestFromLeaf = function(root) {
    let ans = ''
    if (root === null) return ans
    
    const helper = (node, path) => {
        let tmp = path.slice()
        tmp.unshift(String.fromCharCode(node.val + 97))
        if (node.left === null && node.right === null) {
            let str = ''
            for(let i = 0; i < tmp.length; i++) {
                str = str.concat(tmp[i]);
            }
            if (ans === '') ans = str
            else if(str < ans) ans = str
            return
        }
        if (node.left) helper(node.left, tmp)
        if (node.right) helper(node.right, tmp)
    }
    helper(root, [])
    return ans
};