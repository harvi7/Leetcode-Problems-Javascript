var MovingAverage = function(size) {
    this.queue = Array(size).fill(0);
    [this.tail, this.windowSum] = [-1, 0]
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.windowSum += val - this.queue[++this.tail % this.queue.length]
    this.queue[this.tail % this.queue.length] = val
    return this.windowSum / (this.tail < this.queue.length ? this.tail + 1: this.queue.length)
};