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

class UnionFind {

    constructor(N) {
        // intializing parent and rank lists
        this.parent = [];
        this.rank = new Array(N + 1).fill(1);
        for (let i = 0; i <= N; i++) {
            this.parent.push(i);
        }
    }

    find_parent(x) {
        if (this.parent[x] != x) {
            this.parent[x] = this.find_parent(this.parent[x]);
        }
        return this.parent[x];
    }

    union(v1, v2) {
        let p1 = this.find_parent(v1);
        let p2 = this.find_parent(v2);
        if (p1 == p2) {
            return false;
        }
        else if (this.rank[p1] > this.rank[p2]) {
            this.parent[p2] = p1;
            this.rank[p1] += this.rank[p2];
        } else {
            this.parent[p1] = p2;
            this.rank[p2] += this.rank[p1];
        }
        return true
    }
}