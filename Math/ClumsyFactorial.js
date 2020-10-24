var clumsy = function(N) {
    const magic = [1, 2, 2, -1, 0, 0, 3, 3]
    return N + (N > 4 ? magic[N % 4] : magic[N + 3]);
};