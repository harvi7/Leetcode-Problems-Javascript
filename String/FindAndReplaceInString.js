// https://leetcode.com/problems/find-and-replace-in-string/discuss/555382/Intuitive-Javascript-Solution

var findReplaceString = function(S, indexes, sources, targets) {
    const replacements = indexes
        .map((index, i) => [index, sources[i], targets[i]])
        .sort((a, b) => b[0] - a[0])
    const output = replacements.reduce((str, [index, source, target]) => {
        if (str.substring(index, index + source.length) !== source) {
            return str
        }
        return `${str.substring(0, index)}${target}${str.substring(index + source.length)}`
    }, S)
    return output
};