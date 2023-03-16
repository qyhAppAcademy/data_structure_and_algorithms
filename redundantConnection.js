var findRedundantConnection = function (edges) {
    let graph = new UnionFind(edges.length);
    for (let i = 0; i < edges.length; i++) {
        let v1 = edges[i][0];
        let v2 = edges[i][1];
        if (!graph.union(v1, v2)) {
            return edges[i];
        }
    }
};