var myPow = function(x, n) {
    if (n < 0) {
        n = Math.abs(n)
        x = 1/x 
     }
     if (n == 0) return 1
     let half = myPow(x, Math.floor(n/2))

     return (n % 2 == 0) ? half * half : half * half * x
};