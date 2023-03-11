/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var Node = function () {
    this.children = {};
    this.searchedWords = [];
};

var Trie = function () {
    this.root = new Node();
};

Trie.prototype.insert = function (word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        let c = word[i];
        if (node.children[c] === undefined) {
            node.children[c] = new Node();
        }
        node = node.children[c];
        if (node.searchedWords.length < 3) {
            node.searchedWords.push(word);
        }
    }
};

Trie.prototype.search = function (word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        let c = word[i];
        if (node.children[c] === undefined) {
            return [];
        }
        node = node.children[c];
    }
    return node.searchedWords;
};

var suggestedProducts = function (products, searchWord) {
    const trie = new Trie();
    for (let product of products.sort()) {
        trie.insert(product);
    }
    const result = [];
    for (let i = 0; i < searchWord.length; i++) {
        let prefix = searchWord.substring(0, i + 1);
        result.push(trie.search(prefix));
    }
    return result;
};