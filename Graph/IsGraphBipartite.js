var isBipartite = function(graph) {
    const colors = new Map();

    for (let i = 0; i < graph.length; i++) {
        if (!bfs(graph, colors, i)) {
          return false;
        }
    }

    return true;
};

const bfs = (graph, colors, i) => {
    if (!colors.has(i)) {
        const queue = [i];
        colors.set(i, 0);

        while (queue.length > 0) {
            i = queue.shift();

            for (const nb of graph[i]) {
                if (colors.get(nb) === colors.get(i)) {
                  return false;
                }

                if (!colors.has(nb)) {
                  queue.push(nb);
                  colors.set(nb, 1 - colors.get(i));
                }
            }
        }
    }

    return true;
};