var pancakeSort = function(arr) {
    
    var flip = (idx) => {
        for (let i = 0; i <= Math.floor(idx / 2); i++) {
            let tmp = arr[i]
            arr[i] = arr[idx - i]
            arr[idx - i] = tmp
        }
    }
    
    let result = []
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 1; j <= i; j++){
            if (arr[j] == i + 1){
                flip(j)
                result.push(j + 1)
                break
            }
        }
        flip(i)
        result.push(i + 1)
    }
    return result
};


// var pancakeSort = function(arr) {
//     let N = arr.length, flip = []
//     for (let i = N - 1; 0 <= i; i--) {
//         if (arr[i] == i + 1)  
//             continue
//         let j = arr.indexOf(i + 1);
//         flip.push(j + 1), arr.splice(0, j + 1, ...arr.slice(0, j + 1).reverse())
//         flip.push(i + 1), arr.splice(0, i + 1, ...arr.slice(0, i + 1).reverse())
//     }
//     return flip;
// };