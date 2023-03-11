var Node = function () {
    this.children = {};
    this.isWord = false;
};

var Trie = function () {
    this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        let c = word[i];
        if (node.children[c] === undefined) {
            node.children[c] = new Node();
        }
        node = node.children[c];
    }
    node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        let c = word[i];
        if (node.children[c] === undefined) {
            return false;
        }
        node = node.children[c];
    }
    return node.isWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
        let c = prefix[i];
        if (node.children[c] === undefined) {
            return false;
        }
        node = node.children[c];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */