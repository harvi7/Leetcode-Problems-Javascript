var fourSumCount = function(A, B, C, D) {
    // const left = A.reduce((left, a) => B.reduce((left, b) => (left[a + b] = (left[a + b] || 0) + 1, left), left), {});
    // return C.reduce((count, c) => D.reduce((count, d) => count + (left[-c - d] || 0), count), 0);
    
    const left = {};
    for (let a of A) {
        for (let b of B) {
            left[a + b] = (left[a + b] || 0) + 1;
        }
    }
    let count = 0;
    for (let c of C) {
        for (let d of D) {
            count += left[-c - d] || 0;
        }
    }
    return count;
}