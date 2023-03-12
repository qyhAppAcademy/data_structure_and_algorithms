var TrieNode = function () {
    this.children = {};
    this.isWord = false;
}

var WordDictionary = function () {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        let c = word[i];
        if (node.children[c] === undefined) {
            let newNode = new TrieNode();
            node.children[c] = newNode;
        }
        node = node.children[c];
    }
    node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word, start) {
    let node = start === undefined ? this.root : start;
    for (let i = 0; i < word.length; i++) {
        let c = word[i];
        if (c !== "." && node.children[c] === undefined) {
            return false;
        }
        if (c === ".") {
            let substr = word.substring(i + 1);
            for (let char of Object.keys(node.children)) {
                if (this.search(substr, node.children[char])) {
                    return true;
                }
            }
            return false;
        }
        node = node.children[c];
    }
    return node.isWord;
};