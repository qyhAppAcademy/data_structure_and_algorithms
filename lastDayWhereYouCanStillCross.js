class UnionFind {
    constructor(n) {
        this.parent = [];
        for (let i = 0; i < n; i++) {
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
        this.parent[p2] = p1;
    }
}

var latestDayToCross = function (row, col, cells) {

};