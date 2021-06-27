var furthestBuilding = function(heights, bricks, ladders) {
    const pq = new MaxPriorityQueue({priority: x => x})  
    let i
    for (i = 0; i < heights.length - 1; i++) {
        if(heights[i] >= heights[i + 1]) continue
        
        const diff = heights[i + 1] - heights[i]
        if (diff > bricks) { 
            if (ladders === 0) break
            if (!pq.isEmpty() && pq.front().element > diff) {
                bricks += pq.dequeue().element - diff
                pq.enqueue(diff)
            }
            ladders--
        } else { 
            bricks -= diff
            pq.enqueue(diff)
        }
    }
    return i
};