var canPermutePalindrome = function(s) {
    var set = {}
    for (var i = 0; i < s.length; i++) {
        if (!(s.charAt(i) in set)) {
            set[s.charAt(i)] = true
        } else {
            delete set[s.charAt(i)]
        }
    }
    return Object.keys(set).length === 0 || Object.keys(set).length === 1
};