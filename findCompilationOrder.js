const findCompilationOrder = (dependencies) => {
    let graph = {};
    let inDegrees = {};
    dependencies.forEach(dependency => {
        const parent = dependency[1];
        const child = dependency[0];
        if (graph[parent] === undefined) {
            graph[parent] = [];
        }
        graph[parent].push(child);
        if (inDegrees[parent] === undefined) {
            inDegrees[parent] = 0;
        }
        if (inDegrees[child] === undefined) {
            inDegrees[child] = 0;
        }
        inDegrees[child] += 1;
    });

    if (Object.keys(graph).length === 0) {
        return [];
    }

}