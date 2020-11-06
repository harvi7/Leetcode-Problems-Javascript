var subarraySum = function(nums, k) {   
    const arrSums = new Map([[0, 1]]);
    let sum = 0, result = 0;
    for (let num of nums) {
        sum = sum + num;
        result += (arrSums.get(sum - k) || 0);
        arrSums.set(sum, (arrSums.get(sum) || 0) + 1);
    }   
    return result;
};