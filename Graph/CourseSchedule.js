var canFinish = function(numCourses, prerequisites) {
    var graph = {}
    prerequisites.forEach(([c, pre]) => {        
        if (!graph.hasOwnProperty(pre)) {
            graph[pre] = {inDegree : 0, list : []}
        }
        if (!graph.hasOwnProperty(c)) {
            graph[c] = {inDegree : 0, list : []}
        }
        graph[pre].list.push(c)
        graph[c].inDegree++
    });
    var q = Object.entries(graph).filter((v) => v[1].inDegree <= 0).map((v) => v[0])
    while (q.length > 0) {
        var c = q.shift()
        graph[c].list.forEach((course) => {
            graph[course].inDegree--
            if (graph[course].inDegree <= 0) q.push(course)
        })
        delete graph[c]
    }
    return Object.entries(graph).length <= 0
};