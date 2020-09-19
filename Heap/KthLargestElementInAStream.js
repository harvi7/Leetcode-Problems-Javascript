// https://leetcode.com/problems/kth-largest-element-in-a-stream/discuss/812791/binary-search%3A-faster-than-94.99-less-than-88.49-memory

var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = [];

    while (nums.length) {
        this.add(nums.pop());
    }
};

KthLargest.prototype.add = function(val) {
    const idx = binSearch(this.nums, val);
    this.nums.splice(idx, 0, val);
    if (this.nums.length === this.k + 1) {
    this.nums.shift();
    }
    return this.nums[0];
};

function binSearch(array, term, comparator = (a, b) => a - b) {
    let lo = 0;
    let hi = array.length - 1;
    while (lo <= hi) {
        let mid = Math.floor((hi + lo) / 2);
        let comp = comparator(array[mid], term);
        if (comp < 0) {
          lo = mid + 1;
        } else if (comp > 0) {
          hi = mid - 1;
        } else {
          return mid;
        }
    }
    return lo;
}