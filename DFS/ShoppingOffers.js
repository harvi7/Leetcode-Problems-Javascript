var shoppingOffers = function(price, special, needs) {
    let helper = (left) => {
        let minPrice = left.reduce((acc, cur, ind) => acc + (price[ind] * cur), 0)
        let newNeeds = new Array()
        for (let offer of special) {
            for (let [index, unit] of offer.entries()) {
                if (index >= left.length) break
                if (unit > left[index]) {
                    newNeeds = []
                    break
                }

                newNeeds.push(left[index] - unit)
            }
            if(newNeeds.length > 0)
                minPrice = Math.min(minPrice, offer[offer.length - 1] + helper(newNeeds))
            newNeeds = []
        }
        return minPrice
    }
    return helper(needs)
};