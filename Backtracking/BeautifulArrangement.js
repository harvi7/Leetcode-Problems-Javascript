var countArrangement = function(N) {
    let count = 0, visited = new Array(N + 1).fill(false);
    var calculate = function(pos, visited) {
        if (pos > N) {
            count++
            return
        }
        for (let i = 1; i < N + 1; i++){
            if (visited[i] == 0 && (pos % i ==0 || i % pos == 0)) {
                visited[i] = true
                calculate(pos + 1, visited)
                visited[i] = false
            }
        }
    }
    calculate(1, visited)
    return count
};
