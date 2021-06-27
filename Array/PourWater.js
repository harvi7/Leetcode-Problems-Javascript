var pourWater = function(heights, V, K) {
    while (V-- > 0) droplet: {
        for (let d of [-1, 1]) {
            let i = K, best = K
            while (0 <= i + d && i + d < heights.length && heights[i + d] <= heights[i]) {
                if (heights[i + d] < heights[i]) best = i + d
                i += d
            }
            if (heights[best] < heights[K]) {
                heights[best]++
                break droplet
            }
        }
        heights[K]++
    }
    return heights
};