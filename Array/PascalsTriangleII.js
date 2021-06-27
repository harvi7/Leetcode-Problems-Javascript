var getRow = function(rowIndex) {
    let result = [ 1 ]
    while (rowIndex--) {
        let pre = [...result]
        for (let i = 1; i < pre.length; ++i)
            result[i] = pre[i - 1] + pre[i]
        result.push(1)
    }
    return result   
};