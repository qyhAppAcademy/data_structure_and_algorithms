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