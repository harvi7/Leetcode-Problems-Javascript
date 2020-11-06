var findAnagrams = function(s, p) {
    let pCount = new Map()
    let ans = []
    p.split('').forEach(c => pCount.set(c, 1 + (pCount.get(c) || 0)))
    
    let ns = s.length, np = p.length;
    let need = np;
    for (let i = 0, j = 0; j < ns; ++j) {
        if (j - i == np) { // shrink when the window size is reached
            if (pCount.has(s[i])) {
                pCount.set(s[i], 1 + pCount.get(s[i])); // put
                if (pCount.get(s[i]) > 0)
                    ++need;  // post-increment need based on what's really needed
            }
            ++i;
        }
        if (pCount.has(s[j])) {
            if (pCount.get(s[j]) > 0)
                --need; // pre-decrement need based on what's actually available
            pCount.set(s[j], -1 + pCount.get(s[j])); // take
        }
        if (!need) ans.push(i); // no need unmet for anagram at s[i..j] 🎯
    }
    return ans;
};