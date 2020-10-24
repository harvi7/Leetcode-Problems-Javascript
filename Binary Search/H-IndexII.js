var hIndex = function(citations) {
    const n = citations.length
    let left = 0, right = n - 1
    while (left <= right){
        let pivot = left + Math.floor((right - left) / 2)
        if (citations[pivot] == n - pivot) return n - pivot
        else if (citations[pivot] < n - pivot) left = pivot + 1
        else right = pivot - 1
    }
    return n - left
};