var Vector2D = function(v) {
    this.arr = [];
     for (let a of v) {
         this.arr = [...this.arr, ...a];
     }
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
    return this.arr.shift();
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
    return !(this.arr.length == 0);
};
