var numIslands = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    const uf = new UnionFind(grid);
    const offsets = [
        [0, 1],
        [1, 0]
    ];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                for (let offset of offsets) {
                    if (i + offset[0] < m && j + offset[1] < n && grid[i][j] === grid[i + offset[0]][j + offset[1]]) {
                        uf.union(i * n + j, (i + offset[0]) * n + (j + offset[1]));
                    }
                }
                grid[i][j] = "0";
            }
        }
    }
    return uf.count;
};

class UnionFind {

    constructor(grid) {
        // intializing parent and rank lists
        this.m = grid.length;
        this.n = grid[0].length;
        this.parent = [];
        this.rank = new Array(this.m * this.n).fill(1);
        this.count = 0;
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (grid[i][j] === "1") {
                    this.parent.push(i * this.n + j);
                    this.count += 1;
                }
                else {
                    this.parent.push(-1);
                }
            }
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
            return;
        }
        else if (this.rank[p1] > this.rank[p2]) {
            this.parent[p2] = p1;
            this.rank[p1] += this.rank[p2];
        } else {
            this.parent[p1] = p2;
            this.rank[p2] += this.rank[p1];
        }
        this.count -= 1;
    }
}