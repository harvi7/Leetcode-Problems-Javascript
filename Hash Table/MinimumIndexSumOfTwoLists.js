var findRestaurant = function(list1, list2) {
    let map = new Map(), ans = []
    let min = Infinity
    list1.forEach((x, i) => map.set(x, i));
    list2.forEach((x, j) => {
        if (map.has(x)) {
            let i = map.get(x)
            if (min > i + j)
                min = i + j,
                ans = [];
            if (min == i + j)
                ans.push(x)        
        }
    });
    return ans
};