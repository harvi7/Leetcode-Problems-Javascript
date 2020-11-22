var maxProfit = function(prices) {
    let minprice = Number.MAX_VALUE, maxprofit = 0
    for (const price of prices) {
        if (price < minprice) {
            minprice = price
        } else {
            maxprofit = Math.max(maxprofit, price - minprice)
        }
    }
    return maxprofit
};