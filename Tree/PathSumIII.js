var pathSum = function(root, sum) {
    if (!root) return 0;

   let count = traverseAllPaths(root, sum)

   let left = pathSum(root.left, sum)
   let right = pathSum(root.right, sum)
   
   return count + left + right
};
var traverseAllPaths = function(node, sum){
   let count = 0

   if (!node) return 0
   if (sum - node.val == 0){
       count++
   }
   count += traverseAllPaths(node.left, sum - node.val)
   count += traverseAllPaths(node.right, sum - node.val)
   return count
};