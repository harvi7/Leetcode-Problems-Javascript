var findWords = function(words) {
    const rowOne = new Set('qwertyuiop'.split(''));
    const rowTwo = new Set('asdfghjkl'.split(''));
    
    const getRowNum = (letter) => {
        if (rowOne.has(letter)) {
            return 1;
        }
        if (rowTwo.has(letter)) {
            return 2;
        }
        return 3;
    };
    
    const checkRow = word => word.toLowerCase().split('').reduce((acc, element) => acc.add(getRowNum(element)), new Set());
    
    return words.filter(element => checkRow(element).size === 1);
};