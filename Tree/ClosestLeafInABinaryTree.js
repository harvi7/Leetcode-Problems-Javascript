var findClosestLeaf = function(root, k) {
    
    if (root.left == null && root.right == null) return k;

	const graph = new WeakMap()
	let startNode = null
	dfs(root)

	const visited = new WeakSet()
	const queue = []

	visited.add(startNode)
	queue.push(startNode)

	while (queue.length > 0) {
		const node = queue.shift()
		
		if (node != root && graph.get(node).length <= 1) return node.val

		for (const nei of graph.get(node)) {
			if (!visited.has(nei)) {
				visited.add(nei)
				queue.push(nei)
			}
		}
	}


	function dfs(node) {
		if (node == null) return
		if (node.val == k) startNode = node

		if (!graph.has(node)) graph.set(node, [])
			
		if (node.left != null) {
			if (!graph.has(node.left)) graph.set(node.left, [])
			
			graph.get(node).push(node.left)
			graph.get(node.left).push(node)
		}

		if (node.right != null) {
			if (!graph.has(node.right)) graph.set(node.right, [])
			
			graph.get(node).push(node.right)
			graph.get(node.right).push(node)
		}

		dfs(node.left)
		dfs(node.right)
	}
}