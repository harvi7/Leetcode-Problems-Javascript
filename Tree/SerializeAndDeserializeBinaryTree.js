const NULL_SYMBOL = "X"
const DELIMITER = ","

var serialize = function(root) {
    if (!root) return NULL_SYMBOL + DELIMITER
    const leftSerialized = serialize(root.left)
    const rightSerialized = serialize(root.right)
    return root.val + DELIMITER + leftSerialized + rightSerialized;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const nodesLeft = data.split(',')
    return deserializeHelper(nodesLeft);
};

const deserializeHelper = (nodesLeft) => {
    let value = nodesLeft.shift();
    if (value == NULL_SYMBOL) {
      return null;
    }
    let newNode = new TreeNode(parseInt(value))
    newNode.left = deserializeHelper(nodesLeft)
    newNode.right = deserializeHelper(nodesLeft)

    return newNode;
};