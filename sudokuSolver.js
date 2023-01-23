var solveSudoku = function (board) {
    if (backtrack(board)) {
        return board;
    }
    return undefined;
};

const backtrack = (board) => {
    const [x, y] = firstBlank(board);
    if (x === board.length && y === board[0].length) {
        return true;
    }
    const actions = options(x, y, board);
    for (let i = 0; i < actions.length; i++) {
        board[x][y] = actions[i];
        if (backtrack(board)) {
            return true;
        }
        board[x][y] = '.';
    }
    return false;
}

const firstBlank = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === ".") {
                return [i, j];
            }
        }
    }
    return [board.length, board[0].length];
}

const options = (x, y, board) => {
    const set = new Set();
    for (let i = 0; i < 9; i++) {
        if (board[x][i] !== '.') {
            set.add(parseInt(board[x][i]));
        }
        if (board[i][y] !== '.') {
            set.add(parseInt(board[i][y]));
        }
        if (board[Math.floor(x / 3) * 3 + Math.floor(i / 3)][Math.floor(y / 3) * 3 + (i % 3)] !== '.') {
            set.add(parseInt(board[Math.floor(x / 3) * 3 + Math.floor(i / 3)][Math.floor(y / 3) * 3 + (i % 3)]));
        }
    }
    const result = [];
    for (let i = 1; i <= 9; i++) {
        if (!set.has(i)) {
            result.push(i + "");
        }
    }
    return result;
}