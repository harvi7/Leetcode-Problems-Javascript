var knightProbability = function(N, K, r, c) {
    
    const dirs = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    let prevProbs = constructProbs(K);
    
    prevProbs[r][c] = 1;
    
    for (let k = 1; k <= K; k++) {
        const newProbs = constructProbs(K);
              
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                for (const [dirX, dirY] of dirs) {
                    const currRank = i + dirX;
                    const currFile = j + dirY;
                    
                    if (withinBound(currRank, currFile)) {
                        newProbs[currRank][currFile] += (prevProbs[i][j] / 8.0);
                    }
                }
            }
        }
        
        prevProbs = newProbs;
    }
    
    let ans = 0;
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            ans += prevProbs[i][j];
        }
    }
    
    return ans;
    
    function constructProbs(K) {
        const dp = [];
            
        for (let i = 0; i < N; i++) {
            dp[i] = new Array(N).fill(0);
        }
        
        return dp;
    }
    
    function withinBound(row, col) {
        return row >= 0 && col >= 0 && row < N && col < N;
    }
};