var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    
    return function(n) {
        const isCelebrity = (i) => {
            for (let j = 0; j < n; j++) {
                if (i == j) continue
                if (knows(i, j) || !knows(j, i)) {
                    return false;
                }
            }
            return true;
        }
        
        let celebrityCandidate = 0;
        for (let i = 1; i < n; i++) {
            if (knows(celebrityCandidate,i )) {
                celebrityCandidate = i;
            }
        }
        
        if (isCelebrity(celebrityCandidate)) 
            return celebrityCandidate
        return -1
    };
};