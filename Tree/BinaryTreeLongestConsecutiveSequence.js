var longestConsecutive = function(root) {
    function dfs(p, parent, length) {
       if (p == null) return length
       length = (parent != null && p.val == parent.val + 1) ? length + 1 : 1
       return Math.max(length, Math.max(dfs(p.left, p, length),
                                        dfs(p.right, p, length)))
   }
   return dfs(root, null, 0)
};