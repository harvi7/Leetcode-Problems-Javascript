var numMagicSquaresInside = function (grid) {
    var sum = 0

    for (let iMax = grid.length - 2, i = 0; i < iMax; i++)
        for (let jMax = grid[0].length - 2, j = 0; j < jMax; j++)
            if (isMagicSqure(grid, i, j) && isDistinct(grid, i, j)) sum++
    return sum
}

const isDistinct = (grid, i, j) => {
    var num
    var set = new Set()

    for (let iMax = i + 3; i < iMax; i++) {
        for (let k = j, kMax = k + 3; k < kMax; k++) {
            num = grid[i][k]
            if (0 < num && num < 10) set.add(num)
        }
    }

    return set.size === 9
}

const isMagicSqure = (grid, i, j) => {
    let sum = checkLine(grid, i, j, 0, 1) // row

    if (sum !== checkLine(grid, i + 1, j, 0, 1)) return false // row
    if (sum !== checkLine(grid, i + 2, j, 0, 1)) return false // row
    if (sum !== checkLine(grid, i, j, 1, 0)) return false // col
    if (sum !== checkLine(grid, i, j + 1, 1, 0)) return false // col
    if (sum !== checkLine(grid, i, j + 2, 1, 0)) return false // col
    if (sum !== checkLine(grid, i, j, 1, 1)) return false // diag
    if (sum !== checkLine(grid, i + 2, j, -1, 1)) return false // diag

    return true
}

const checkLine = (grid, i, j, di, dj) => {
    let sum = 0

    for (let k = 0; k < 3; k++) {
        sum += grid[i][j]
        i += di
        j += dj
    }

    return sum
}