/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var TrieNode = function () {
    this.children = {};
    this.isWord = false;
}

var Trie = function () {
    this.root = new TrieNode();
};

Trie.prototype.insert = function (word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        let c = word[i];
        if (node.children[c] === undefined) {
            node.children[c] = new TrieNode();
        }
        node = node.children[c];
    }
    node.isWord = true;
};

var findWords = function (board, words) {
    const trie = new Trie();
    for (let word of words) {
        trie.insert(word);
    }
    const result = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(trie.root, board, i, j, result);
        }
    }
    return result;
};

var dfs = function (node, board, row, col, result, word = "") {
    if (0 <= row && row < board.length && 0 <= col && col < board[0].length) {
        if (node.isWord) {
            result.push(word);
            node.isWord = false;
        }
        let c = board[row][col];
        board[row][col] = undefined;
        word += c;
        let child = node.children[c];
        if (child !== undefined) {
            const offsets = [
                [0, -1],
                [-1, 0],
                [0, 1],
                [1, 0]
            ]
            for (let offset of offsets) {
                dfs(child, board, row + offset[0], col + offset[1], result, word);
            }
        }
        board[row][col] = c;
    }
}