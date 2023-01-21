var solveSudoku = function (board) {
    backtrack(board)
    return board;
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
    console.log([x, y]);
    console.log(actions);
    return false;
}

const firstBlank = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '.') {
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
            set.add(parseInt(board[Math.floor(x / 3) + Math.floor(i / 3)][Math.floor(y / 3) * 3 + (i % 3)]));
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

const board =
    [["5", "3", "4", "6", "7", "8", "9", "1", "2"], ["6", "7", "2", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

solveSudoku(board);
// console.log(board);