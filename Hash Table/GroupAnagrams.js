// https://leetcode.com/problems/group-anagrams/discuss/688150/5-Line-JS-Solution-Easy-to-understand

var groupAnagrams = function(strs) {
    let mappings = {};
    
    for(let word of strs) {
        const anagramGroup = word.split("").sort().join("");
        mappings[anagramGroup] ? mappings[anagramGroup].push(word) : mappings[anagramGroup] = [word];
    }
    return Object.values(mappings);
};