var validWordSquare = function(words) {
    var n = words.length
    for(let i = 0; i < n; i++){
        var curr = words[i];
        for (var j = 0; j < curr.length; j++){
            if (j >= m || i>= words[j].length || words[i].charAt(j) != words[j].charAt(i)) {
                return false
            }
        }
    }
    return true
};