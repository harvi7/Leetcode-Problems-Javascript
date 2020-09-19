var deleteAndEarn = function(nums) {
    if (nums.length <= 1) return nums.length * nums[0] || 0    
    let count = new Map();
    for (let num of nums){
        let val = count.get(num) || 0
        count.set(num, val + 1)
    }
    
    
    let avoid = 0
    let using = 0
    let prev = -1
    let ar = [...count.keys()].sort((a, b) => a - b);
    for (let key of ar) {
        var m = Math.max(avoid, using);
        if (key - 1 != prev) {
            using = key * count.get(key) + m;
            avoid = m;
        } else {
            using = key * count.get(key) + avoid;
            avoid = m;
        }
        prev = key;
    }
    return Math.max(avoid, using);
};