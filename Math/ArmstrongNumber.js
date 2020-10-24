var isArmstrong = function(N) {
    const str = N.toString();
    return str.split('').map(
        current => Math.pow(current, str.length)
    ).reduce((a, b)=> a + b) === N;
};