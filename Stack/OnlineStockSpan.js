var StockSpanner = function() {
    this.stk = []
    this.index = -1
};

StockSpanner.prototype.next = function(price) {
    this.index++
    if (!this.stk.length) {
        this.stk.push([this.index, price]) 
        return 1
    } else {
        let [prevIdx, prevPrice] = this.stk[this.stk.length - 1]
        while(prevPrice <= price) {
            this.stk.pop();
            if (!this.stk.length) break
            [prevIdx, prevPrice] = this.stk[this.stk.length - 1]
        }
        this.stk.push([this.index, price])
        if(this.stk.length === 1) return this.index + 1
        return this.index - prevIdx
    }
};