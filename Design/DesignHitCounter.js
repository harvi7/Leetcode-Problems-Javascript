var HitCounter = function() {
    this.hits = new Map()
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.hits.set(timestamp, (this.hits.get(timestamp) || 0) +1)
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    let start = timestamp >= 300 ? timestamp - 300: 0
	
    this.hits.forEach((value, key) => {
      if (key <= start) {
        this.hits.delete(key)
      }
    })
    
    let count = 0;
    for(let val of this.hits.values()) {
        count += val
    }    
    return count
};