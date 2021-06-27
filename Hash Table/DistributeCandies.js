var distributeCandies = function(candyType) {
    const uniqueCandiesSet = new Set(candyType)
    return uniqueCandiesSet.size < candyType.length / 2 ? uniqueCandiesSet.size : candyType.length / 2
};