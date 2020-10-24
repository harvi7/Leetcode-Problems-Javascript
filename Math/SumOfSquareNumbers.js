var judgeSquareSum = function(c) {
    for (let i = 2; i * i <= c; i++) {
            let count = 0
            if (c % i == 0) {
                while (c % i == 0) {
                    count++
                    c /= i
                }
                if (i % 4 == 3 && count % 2 != 0)
                    return false
            }
        }
        return c % 4 != 3
};