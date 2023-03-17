var calcEquation = function (equations, values, queries) {
    const uf = new UnionFind(equations, values);
    const result = [];
    for (let query of queries) {
        let [x, y] = query;
        if (uf.parent[x] === undefined || uf.parent[y] === undefined || uf.find(x) !== uf.find(y)) {
            result.push(-1.0);
        }
        else {
            result.push(uf.weight[x] / uf.weight[y]);
        }
    }
    return result;
};