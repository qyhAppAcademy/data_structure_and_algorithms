class Node {
    constructor(key, value) {
        this.key = key;
        this.val = value;
        this.next = this.prev = null;
        this.freq = 1;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    insertHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    removeNode(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    removeTail() {
        let node = this.tail.prev;
        this.removeNode(node);
        return node.key;
    }

    isEmpty() {
        return this.head.next.val == null;
    }
}

var LFUCache = function (capacity) {
    this.capacity = capacity;
    this.currentSize = 0;
    this.leastFreq = 0;
    this.nodeHash = new Map();
    this.freqHash = new Map();
};

LFUCache.prototype.get = function (key) {
    let node = this.nodeHash.get(key);
    if (!node) return -1;
    this.freqHash.get(node.freq).removeNode(node);
    if (node.freq == this.leastFreq && this.freqHash.get(node.freq).isEmpty()) this.leastFreq++
    node.freq++;
    // freqHash housekeeping
    if (this.freqHash.get(node.freq) == null) this.freqHash.set(node.freq, new DoublyLinkedList())
    this.freqHash.get(node.freq).insertHead(node);
    return node.val;
};