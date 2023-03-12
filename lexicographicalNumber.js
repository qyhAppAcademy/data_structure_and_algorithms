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