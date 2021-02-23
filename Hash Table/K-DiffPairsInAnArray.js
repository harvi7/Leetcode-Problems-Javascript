var findPairs = function(nums, k) {
    if (nums.length === 0 || k < 0) return 0
	let counter = new Map(), count = 0
	for (num of nums) {
		counter.set(num,(counter.get(num) + 1) || 1)
	}

	counter.forEach((value, key) => {
		if (k === 0) {
			if (value > 1) count++
		}
		else {
			if (counter.has(key + k)) count++
		}
	})

	return count
};