var selfDividingNumbers = function(left, right) {     
    const ans = []
    for (let i = left; i < right + 1; i++) {
        const digits = String(i)
        
        if (digits.length === 1 || isSelfDividing(digits)) {
            ans.push(i)
        }
    }
    return ans
};

function isSelfDividing(digits) {
    const value = Number(digits)
    let result
    
    for (let i = 0; i < digits.length; i++) {
        const number = Number(digits[i])
        
        if (number === 0 || value % number !== 0) {
            result = false
            break
        }
        
        result = true
    }
    return result
}