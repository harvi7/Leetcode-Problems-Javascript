var findNumberOfLIS = function(nums) {
    const N = nums.length
    const lengths = new Array(N).fill(1)
    const counts = new Array(N).fill(1)

    for (let i = 1; i < N; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (lengths[j] + 1 == lengths[i]) {
                    counts[i] += counts[j]
                } 
                else if (lengths[j] + 1 > lengths[i]) {
                    lengths[i] = lengths[j] + 1
                    counts[i] = counts[j]
                }
            }
        }
    }

    const longest = Math.max(...lengths);
    let ans = 0

    for (let i = 0; i < N; i++) {
        if (lengths[i] == longest) ans += counts[i]
    }

    return ans
};