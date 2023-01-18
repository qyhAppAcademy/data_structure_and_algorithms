var exist = function (board, word) {
    if (word.length === 0) {
        return true;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (backtrack([i, j], [], board, word)) {
                return true;
            }
        }
    }
    return false;
};

const DIRS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
];

const backtrack = (pos, visited, board, word) => {
    const [x, y] = pos;
    if (word.length === 1) {
        return word[0] === board[x][y];
    }
    if (word[0] === board[x][y]) {
        visited.push(pos);
        for (const dir of DIRS) {
            const [dx, dy] = dir;
            const newPos = [x + dx, y + dy];
            if (!includePos(newPos, visited) && (isValid(newPos, board)) && backtrack(newPos, visited, board, word.substring(1))) {
                return true;
            }
        }
        visited.pop();
    }
    return false;
}

const includePos = (pos, visited) => {
    for (let i = 0; i < visited.length; i++) {
        if (pos[0] === visited[i][0] && pos[1] === visited[i][1]) {
            return true;
        }
    }
    return false;
}

const isValid = (pos, board) => {
    const [x, y] = pos;
    return x >= 0 && x < board.length && y >= 0 && y < board[0].length;
}