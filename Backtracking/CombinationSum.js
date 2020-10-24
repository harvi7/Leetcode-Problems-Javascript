var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    var comb = [];
    var result = [];
    backtrack(0, target);
    return result;
    
    function backtrack(start, target) {
        if (target === 0) return result.push(comb.slice());
        if (target < 0) return;
        if (start === candidates.length) return;
        comb.push(candidates[start]);
        backtrack(start, target - candidates[start]);
        comb.pop();
        backtrack(start + 1, target);
  }
};