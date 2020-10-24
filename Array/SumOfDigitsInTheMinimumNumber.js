var sumOfDigits = function(A) {
    let min = A.reduce((acc, n) => Math.min(acc, n), A[0]);
    let ans = 0;
    do {
        ans += Math.floor(min);
    } while (min /= 10);
    return !(ans % 2);
};