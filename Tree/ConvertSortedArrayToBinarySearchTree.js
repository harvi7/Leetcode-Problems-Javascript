// var sortedArrayToBST = function(nums) {
//     if (!nums || nums.length == 0) return null
//     let constructBSTRecursive = (i = 0, j = nums.length - 1) => {
//         if (j < i) return null
//         let mid = i + Math.floor((j - i) / 2)
//         let root = new TreeNode(nums[mid])
//         root.left = constructBSTRecursive(i, mid - 1)
//         root.right = constructBSTRecursive(mid + 1, j)
//         return root
//     }
//     return constructBSTRecursive()
// };

var sortedArrayToBST = function(nums) {
    if (!nums || nums.length == 0) return null
    return helper(nums, 0, nums.length - 1)
};

const helper = (nums, left, right) => {
    if (left > right) return null
    let mid = left + Math.floor((right - left) / 2)
    let root = new TreeNode(nums[mid])

    root.left = helper(nums, left, mid - 1)
    root.right = helper(nums, mid + 1, right)
    return root
}