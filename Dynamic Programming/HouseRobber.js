// https://leetcode.com/problems/house-robber/discuss/55953/3-lines-solution-in-JavaScript

var rob = function(nums) {
    return nums.reduce(
        function(p, n) { 
            return [p[1], Math.max(p[0] + n, p[1])]; 
        }, [0,0]
    )[1];
};