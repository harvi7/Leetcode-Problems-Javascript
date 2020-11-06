var largestNumber = function(nums) {
    let S = nums.map(String)
    S.sort((a, b) => (b + a).localeCompare(a + b))
    return S.every(c => c == '0') ? '0' : S.join('');
};