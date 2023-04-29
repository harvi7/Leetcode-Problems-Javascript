var longestConsecutive = function(nums) {
    if (nums == null || nums.length === 0) return 0

    const set = new Set(nums)
    let longestStreak = 0

    for (let num of set) {
        if (set.has(num - 1)) continue; 
        let currentNum = num
        let currentStreak = 1

        while (set.has(currentNum + 1)) {
          currentNum++
          currentStreak++
        }
        longestStreak = Math.max(longestStreak, currentStreak)
    }

    return longestStreak
};