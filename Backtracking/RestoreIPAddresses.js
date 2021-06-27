var restoreIpAddresses = function(s) {
    const output = []
    
    function dfs(path, str) {
        if (path.length === 3) {
            if (isValid(str)) output.push([...path, str])
            return
        }
        
        for (let i = 1; i < 4; i++) {
            let subStr = str.slice(0, i)
            if (!isValid(subStr)) continue
            dfs([...path, subStr], str.slice(i))
        }
    }
    
    function isValid(segment) {
        if (+segment > 255 || !segment.length) return false
        if (segment.length >= 2 && segment[0] === '0') return false
        return true
    }
    
    dfs([], s);
    return output.map(x => x.join('.'))
};