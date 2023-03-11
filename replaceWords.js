var Node = function () {
    this.children = {};
    this.word = undefined;
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
    }
    node.word = word;
};

Trie.prototype.search = function (word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        let c = word[i];
        if (node.children[c] === undefined) {
            if (node.word === undefined) {
                return word;
            }
            else {
                return node.word;
            }
        }
        else {
            if (node.word === undefined) {
                node = node.children[c];
            }
            else {
                return node.word;
            }
        }
    }
    return node.word === undefined ? word : node.word;
};

var replaceWords = function (dictionary, sentence) {
    const trie = new Trie();
    for (let word of dictionary) {
        trie.insert(word);
    }
    const result = [];
    for (let word of sentence.split(" ")) {
        result.push(trie.search(word));
    }
    return result.join(" ");
};