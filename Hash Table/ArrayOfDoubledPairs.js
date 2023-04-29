var canReorderDoubled = function(arr) {
    arr.sort((a, b) => Math.abs(a) - Math.abs(b));
  
    const counts = new Map()
    for (let value of arr) {
        counts.set(value, counts.has(value) ? counts.get(value) + 1 : 1)
    }

    for (let value of arr) {
        if (!counts.has(value)) continue   
        decrement(counts, value)

        const doubled = value * 2
        if (!counts.has(doubled)) return false
        decrement(counts, doubled)

        if (counts.size === 0)
          return true;
    }

    return true
};
  
const decrement = (counts, value) => {
  if (counts.get(value) === 1) {
    counts.delete(value)
    return;
  }
  
  counts.set(value, counts.get(value) - 1)
};