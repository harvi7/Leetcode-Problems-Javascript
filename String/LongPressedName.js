const count = (s) => {
    const A = [];
    for (let i = 0; i < s.length; ++i) {
        let j = i;
        while (j + 1 < s.length && s[j] === s[j + 1]) ++j;
        A.push({c: s[i], count: j - i + 1 });
        i = j;
    } 
    return A;
}
var isLongPressedName = function(name, typed) {
    const A = count(name);
    const B = count(typed);
    if (A.length !== B.length) return false;
    for (let i = 0; i < A.length; ++i)
        if (!B[i] || A[i].c !== B[i].c || A[i].count > B[i].count) return false;
    return true;
};