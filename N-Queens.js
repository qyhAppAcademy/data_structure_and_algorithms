var solveNQueens = function (n) {
    const ans = [];
    const board =
        new Array(n).fill().map(() => new Array(n).fill("."));
    backtrack(ans, board, 0, n);
    return ans;
};

const backtrack = (ans, board, row, n) => {
    if (row === n) {
        const res = [];
        for (let i = 0; i < n; i++) {
            const row = [];
            for (let j = 0; j < n; j++) {
                row.push(board[i][j]);
            }
            res.push(row.join(""));
        }
        ans.push(res);
        return;
    }
    for (let i = 0; i < n; i++) {
        if (isValid([row, i], board, n)) {
            board[row][i] = "Q";
            backtrack(ans, board, row + 1, n);
            board[row][i] = ".";
        }
    }
}

const DIRS = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1]
];

const isValid = (pos, board, n) => {
    const [x, y] = pos;
    for (const dir of DIRS) {
        const [dx, dy] = dir;
        let [curX, curY] = [x + dx, y + dy];
        while ((curX >= 0 && curX < n) && (curY >= 0 && curY < n)) {
            if (board[curX][curY] === "Q") {
                return false;
            }
            curX += dx;
            curY += dy;
        }
    }
    return true;
}