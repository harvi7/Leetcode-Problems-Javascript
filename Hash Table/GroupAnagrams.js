// https://leetcode.com/problems/group-anagrams/discuss/688150/5-Line-JS-Solution-Easy-to-understand

var groupAnagrams = function(strs) {
    // let mappings = {};
    
    // for(let word of strs) {
    //     const anagramGroup = word.split("").sort().join("");
    //     mappings[anagramGroup] ? mappings[anagramGroup].push(word) : mappings[anagramGroup] = [word];
    // }
    // return Object.values(mappings);

    let ans = {}
    for (let str of strs) {
        let count = new Array(26).fill(0)
        for (let char of str) count[char.charCodeAt() - 97]++
        let key = count.join("#")
        ans[key] ? ans[key].push(str) : ans[key] = [str]
    }
    return Object.values(ans)
};