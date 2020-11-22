var largestTimeFromDigits = function(arr) {
    let result = "";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                if (i == j || j == k || k == i) continue
                let hh = arr[i] + "" + arr[j]
                let mm = arr[k] + "" + arr[6-i-j-k]
                let _time = hh + ":" + mm
                if (hh.localeCompare("24") < 0 && mm.localeCompare("60") < 0 && _time.localeCompare(result) > 0) result = _time
            }
        }
    }
    return result
};