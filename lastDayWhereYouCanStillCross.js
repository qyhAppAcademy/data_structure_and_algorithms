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
    const grid = [];
    for (let i = 0; i < row; i++) {
        let r = [];
        for (let j = 0; j < col; j++) {
            r.push(1);
        }
        grid.push(r);
    }
    for (let i = 0; i < cells.length; i++) {
        cells[i][0] -= 1;
        cells[i][1] -= 1;
    }
    const uf = new UnionFind(row * col + 2);
    const offsets = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];
    for (let i = cells.length - 1; i >= 0; i--) {
        let [x, y] = cells[i];
        grid[x][y] = 0;
        for (let offset of offsets) {
            let [nX, nY] = [x + offset[0], y + offset[1]];
            if (nX >= 0 && nX < row && nY >= 0 && nY < col && grid[nX][nY] === 0) {
                uf.union(x * col + (y + 1), nX * col + (nY + 1));
            }
        }
        if (x === 0) {
            uf.union(x * col + (y + 1), 0);
        }
        if (x === row - 1) {
            uf.union(x * col + (y + 1), row * col + 1);
        }
        let top = uf.find_parent(0);
        let bottom = uf.find_parent(row * col + 1);
        if (top === bottom) {
            return i;
        }
    }
};