/**
 * @param {number} n
 * @return {number[]}
 */
var TrieNode = function () {
    this.children = {};
}

var Trie = function () {
    this.root = new TrieNode();
}

Trie.prototype.insert = function (num) {
    let node = this.root;
    let nums = num.toString().split("");
    while (nums.length > 0) {
        let n = parseInt(nums.shift());
        if (node.children[n] === undefined) {
            node.children[n] = new TrieNode();
        }
        node = node.children[n];
    }
};

var dfs = function (node, result, num = 0) {
    if (Object.keys(node.children).length === 0) {
        return;
    }
    for (let child of Object.keys(node.children)) {
        let newNum = num * 10 + parseInt(child);
        result.push(newNum);
        dfs(node.children[child], result, newNum);
    }
}

var lexicalOrder = function (n) {
    const trie = new Trie();
    for (let i = 1; i <= n; i++) {
        trie.insert(i);
    }
    const result = [];
    dfs(trie.root, result);
    return result;
};