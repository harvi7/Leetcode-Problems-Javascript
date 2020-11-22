var closestValue = function(root, target) {
    let val = root.val, closest = root.val
    while (root) {
        val = root.val
        closest = Math.abs(val - target) < Math.abs(closest - target) ? val : closest
        root =  target < root.val ? root.left : root.right
    }
    return closest
};