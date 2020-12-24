var largeGroupPositions = function(s) {
    let ans = []
    let i = 0, N = s.length 
    for (let j = 0; j < N; j++) {
        if (j == N - 1 || s[j] != s[j + 1]) {
            if (j - i + 1 >= 3)
                ans.push([i, j])
            i = j + 1
        }
    }
    return ans
};