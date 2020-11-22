const stack = []

var BSTIterator = function(root) {
    leftMostInorder(root)
};

const leftMostInorder = (root) => {
    while (root) {
        stack.push(root)
        root = root.left;
    }
}

BSTIterator.prototype.next = function() {
    let node = stack.pop();
    leftMostInorder(node.right)
    return node.val
};

BSTIterator.prototype.hasNext = function() {
    return stack.length > 0
};