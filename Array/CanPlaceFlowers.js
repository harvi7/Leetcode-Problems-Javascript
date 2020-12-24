var canPlaceFlowers = function(flowerbed, n) {
    let i = 0, count = 0
    while (i < flowerbed.length) {
        if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
            flowerbed[i++] = 1
            count++
        }
        if (count >= n)
            return true
        i++
    }
    return false
};