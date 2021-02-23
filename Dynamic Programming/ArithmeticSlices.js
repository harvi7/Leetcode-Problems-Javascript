var numberOfArithmeticSlices = function(A) {
    let dp = 0, sum = 0
    for (let i = 2; i < A.length; i++) {
        if (A[i] - A[i - 1] == A[i - 1] - A[i - 2]) {
            dp = 1 + dp
            sum += dp
        } else
            dp = 0
    }
    return sum
};