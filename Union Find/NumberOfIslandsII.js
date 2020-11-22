var numIslands2 = function(m, n, positions) {
    const result = []
	const dsu = new DSU(m * n)
	let count = 0

	for (const [x, y] of positions) {
		const index = x * n + y

		if (dsu.parent[index] !== -1) {
			result.push(count)
			continue
		}

		dsu.parent[index] = index
		count++
		for (const [xDelta, yDelta] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
			const r = x + xDelta
			const c = y + yDelta
			const neighborIndex = r * n + c

			if (r < 0 || r >= m || c < 0 || c >= n || dsu.parent[neighborIndex] === -1) continue
			if (dsu.union(index, neighborIndex)) count--
		}
		result.push(count)
	}
	return result
}

class DSU {
	constructor(n) {
		this.parent = new Array(n).fill(-1)
	}

	find (x) {
		if (this.parent[x] === x) return x
		return this.find(this.parent[x])
	}

	union (x, y) {
		x = this.find(x)
		y = this.find(y)

		if (x === y) return false
		this.parent[x] = y
		return true
	}
}