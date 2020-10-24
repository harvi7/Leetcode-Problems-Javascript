var topKFrequent = function(words, k) {
    const map = words.reduce((acc, word) => {
        let count = acc.get(word) || 0;
        acc.set(word, ++count)
        return acc;
    }, new Map());

  const ret = [...map].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

  return ret.slice(0, k).map(item => item[0]);
};