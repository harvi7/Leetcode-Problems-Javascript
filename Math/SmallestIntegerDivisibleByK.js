var smallestRepunitDivByK = function(K) {
    if (K % 2 == 0 || K % 5 == 0) return -1
    let prevRemainder = 0;
    for (let length_N = 1; length_N <= K; length_N++) {
        prevRemainder = (prevRemainder * 10 + 1) % K
        if (prevRemainder == 0) {
            return length_N
        }
    }
    return -1
};