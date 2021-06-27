var scoreOfParentheses = function(S) {
    let len = S.length, bal = 0, ans = 0
    for (let i = 1; i < len; i++)
        if (S.charAt(i) === "(") 
            bal++
        else if (S.charAt(i - 1) === "(") 
            ans += 1 << bal--
        else bal--  
    return ans
};