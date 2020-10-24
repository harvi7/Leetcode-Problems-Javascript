var shiftGrid = function(grid, k) {
    var arr = grid.flat();
  
    for (let i = 0; i < k; i++) {
        var end = arr.pop();
        arr.unshift(end);
    }

    var col = grid[0].length;
    var res = [];
    while (arr.length) res.push(arr.splice(0, col));
    return res;
};