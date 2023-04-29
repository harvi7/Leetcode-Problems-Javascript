var maxProfit = function(prices) {
    if (prices.length == 0) return 0
    
    let firstBuy = Infinity, secondBuy = Infinity
    
    return prices.reduce(
        ([firstSell, secondSell], price) => {
            firstBuy = Math.min(firstBuy, price)
            firstSell = Math.max(firstSell, price - firstBuy)
            
            secondBuy = Math.min(secondBuy, price - firstSell)
            secondSell = Math.max(secondSell, price - secondBuy)
            
            return [firstSell, secondSell]
        },
        [0, 0]
    )[1]
};