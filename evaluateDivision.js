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

class UnionFind {
    constructor(equations, values) {
        this.parent = {};
        this.weight = {};
        for (let i = 0; i < equations.length; i++) {
            let [x, y] = equations[i];
            let val = values[i];
            if (this.parent[x] === undefined && this.parent[y] === undefined) {
                this.parent[x] = y;
                this.weight[x] = val;
                this.parent[y] = y;
                this.weight[y] = 1;
            }
            else if (this.parent[x] === undefined) {
                this.parent[x] = y;
                this.weight[x] = val;
            }
            else if (this.parent[y] === undefined) {
                this.parent[y] = x;
                this.weight[y] = 1 / val;
            }
            else {
                this.union(x, y, val);
            }
        }
    }

    find(v) {
        if (this.parent[v] != v) {
            const p = this.find(this.parent[v]);
            this.weight[v] *= this.weight[this.parent[v]];
            this.parent[v] = p;
        }
        return this.parent[v];
    }

    union(v1, v2, val) {
        let p1 = this.find(v1);
        let p2 = this.find(v2);
        this.weight[p1] = this.weight[v2] * val / this.weight[v1];
        this.parent[p1] = p2;
    }
}