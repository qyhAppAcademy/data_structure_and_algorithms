class UnionFind {
    constructor(n) {
        this.parent = [];
        for (let i = 0; i < 4 * n * n; i++) {
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

var regionsBySlashes = function (grid) {
    let n = grid.length;
    const uf = new UnionFind(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let cell = grid[i][j];
            let left = 4 * (i * n + j);
            let top = 4 * (i * n + j) + 1;
            let right = 4 * (i * n + j) + 2;
            let bottom = 4 * (i * n + j) + 3;
            if (cell === " ") {
                uf.union(left, top);
                uf.union(left, right);
                uf.union(left, bottom);
            }
            else if (cell === "/") {
                uf.union(left, top);
                uf.union(right, bottom);
            }
            else if (cell === "\\") {
                uf.union(left, bottom);
                uf.union(right, top);
            }
            if (j - 1 >= 0) {
                uf.union(left, left - 2);
            }
            if (j + 1 < n) {
                uf.union(right, bottom + 1);
            }
            if (i - 1 >= 0) {
                uf.union(top, 4 * ((i - 1) * n + j) + 3);
            }
            if (i + 1 < n) {
                uf.union(bottom, 4 * ((i + 1) * n + j) + 1);
            }
        }
    }
    let count = 0;
    for (let i = 0; i < uf.parent.length; i++) {
        if (uf.parent[i] === i) {
            count += 1;
        }
    }
    return count;
};