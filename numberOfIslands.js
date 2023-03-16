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