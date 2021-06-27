var findTheDistanceValue = function(arr1, arr2, d) {
    arr2.sort(function(a, b){ return a - b});

    let count = arr1.length
    for (let val of arr1) {
        let arr2_index = searchForClosest(arr2, val)
        let difference

        if (arr2_index == 0) difference = Math.abs(val - arr2[arr2_index])
        else difference = Math.min(Math.abs(val - arr2[arr2_index - 1]), Math.abs(val - arr2[arr2_index]))
        if (difference <= d) count--
    }
    return count
}

const searchForClosest = (nums, target) => {
    let left = 0, right = nums.length - 1

    while (left < right) {
        let mid = left + Math.floor((right - left) >> 1)

        if (nums[mid] < target) 
            left = mid + 1
        else
            right = mid
    }
    return right
}