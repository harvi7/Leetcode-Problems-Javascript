class Codec {
    constructor() {
  }
  
  /** 
   * @param {Node} root
   * @return {TreeNode}
   */
  // Encodes an n-ary tree to a binary tree.
  encode = function(root) {
      if (!root) {
          return null
      }
      let newRoot = new TreeNode(root.val)
      let head = [newRoot, root]

      let queue = [head]

      while (queue.length > 0) {
          let [bNode, nNode] = queue.shift()
          let prevBNode = null, headBNode = null
          for (let nChild of nNode.children) {
            let newBNode = new TreeNode(nChild.val)
            if (!prevBNode) {
              headBNode = newBNode
            } else {
              prevBNode.right = newBNode
            }
            prevBNode = newBNode

            let nextEntry = [newBNode, nChild]
            queue.push(nextEntry)
          }

          // Attach the list of children to the left node.
          bNode.left = headBNode
      }
      return newRoot
  }
  
  /** 
   * @param {TreeNode} root 
   * @return {Node}
   */
  // Decodes your binary tree to an n-ary tree.
  decode = function(root) {
      if (!root) {
        return null
      }
      let newRoot = new Node(root.val, [])

      // adding the first element to kickoff the loop
      let head = [newRoot, root]
      let queue = [head]

      while (queue.length > 0) {
        let [nNode, bNode] = queue.shift()

        // Decoding the children list
        let firstChild = bNode.left
        let sibling = firstChild
        while (sibling) {
        let nChild = new Node(sibling.val, [])
        nNode.children.push(nChild)

        // prepare the decoding the children of the child, by standing in the queue.
        let nextEntry = [nChild, sibling]
        queue.push(nextEntry)

        sibling = sibling.right
        }
      }

      return newRoot
  }
}