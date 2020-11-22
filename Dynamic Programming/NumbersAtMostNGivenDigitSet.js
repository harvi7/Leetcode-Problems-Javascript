var atMostNGivenDigitSet = function(digits, n) {
    n = n.toString();
    let len = n.length

    return countNumbersThatHaveLessDigitsThanN() + countNumbersThatHaveSameDigitsAsN();

    function countNumbersThatHaveLessDigitsThanN() {
        let res = 0
        for (let i = 1; i < len; i++)
            res += digits.length ** i
        return res
    }
    
    function countNumbersThatHaveSameDigitsAsN() {
        let res = 0
        for (var i = 0; i < len; i++) {
            let suitableDigits = digits.filter(d => d < n[i]).length
            res += suitableDigits * (digits.length ** (len - i - 1))

            if (!digits.includes(n[i]))
                break;
        }
        res += (i === len)
        return res
    }
};