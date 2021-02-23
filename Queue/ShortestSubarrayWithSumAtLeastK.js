var shortestSubarray = function(A, K) {
    let N = A.length
    let P = new Array(N + 1)
    P[0] = 0
    for (let i = 0; i < N; i++) 
        P[i + 1] = P[i] + A[i];
    let monoq = []
    let ans = N + 1
    for(let i = 0; i < N + 1; i++) {
        while (monoq.length > 0 && P[i] - P[monoq[0]] >= K) {
            ans = Math.min(ans, i - monoq[0])
            monoq.shift()
        }
        while(monoq.length > 0 && P[i] <= P[monoq[monoq.length - 1]]) {
            monoq.pop()
        }
        monoq.push(i)
    }
    return ans <= N ? ans : -1
};