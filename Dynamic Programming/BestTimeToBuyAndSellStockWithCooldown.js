var maxProfit = function(prices) {
    if (prices.length <= 1) return 0
    const calProfit = (prev, price) => {
        const hold = Math.max(prev.hold, prev.rest - price);
        const sold = prev.hold + price;
        const rest = Math.max(prev.rest, prev.sold);
        return {hold, sold, rest};
    }
    const profits = prices.reduce(calProfit, {hold: -Infinity, sold: -Infinity, rest: 0});
    return Math.max(profits.sold, profits.rest);
};  