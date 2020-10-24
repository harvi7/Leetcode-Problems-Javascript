var subsets = function(nums) {
    let res = []
	backtrack(0, [])
	
	function backtrack(index, subset) {
		res.push(subset)
		for (let i = index; i < nums.length; i++) {
			backtrack(i + 1, [...subset, nums[i]])
		}
	}
	return res
};