var singleNumber = function(nums) {
    let bitmask = 0
    for (let num of nums) bitmask ^= num

    const diff = bitmask & (-bitmask)

    let x = 0
    for (let num of nums) if ((num & diff) != 0) x ^= num

    return [x, bitmask^x]
};