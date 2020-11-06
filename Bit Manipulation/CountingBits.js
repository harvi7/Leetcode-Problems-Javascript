var countBits = function(num) {
    const res = [0]    
    for (let i = 1; i <= num; i++) {
        const odd = i & 1;
        res.push(res[i >> 1] + odd)
    }  
    return res
};