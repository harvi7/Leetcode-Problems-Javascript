// https://leetcode.com/problems/random-pick-with-weight/discuss/233663/JavaScript-Prefix-Sum-%2B-Binary-Search-solution

var Solution = function(w) {
    this.prefixSums = Array(w.length + 1)
    this.prefixSums[0] = 0
    for (let i = 0; i < w.length; i++)
        this.prefixSums[i + 1] = this.prefixSums[i] + w[i]
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const target = genRandInt(0, this.prefixSums[this.prefixSums.length - 1])
    let low = 0, high = this.prefixSums.length - 2
    while (low + 1 < high) {
        let mid = low + Math.floor((high - low) / 2)
        if (this.prefixSums[mid] === target) return mid
        else if (this.prefixSums[mid] < target) low = mid
        else high = mid - 1
    }
    if (this.prefixSums[high] <= target) return high
    return low
};

function genRandInt(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower
}