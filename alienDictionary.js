class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.elements[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
}

export class Solution {
    /**
     * @param words: a list of words
     * @return: a string which is correct order
     */
    alienOrder(words) {
        // Write your code here
        if (words.length === 1) {
            return "";
        }
        const graph = {};
        for (let i = 1; i < words.length; i++) {
            const wordA = words[i - 1];
            const wordB = words[i];
            let a = 0;
            let b = 0;
            while (wordA[a] === wordB[b]) {
                if (graph[wordA[a]] === undefined) {
                    graph[wordA[a]] = new Set();
                }
                a += 1;
                b += 1;
            }
            if (b === wordB.length && a < wordA.length) {
                return "";
            }
            if (wordA[a] !== undefined && wordB[b] !== undefined) {
                if (graph[wordA[a]] === undefined) {
                    graph[wordA[a]] = new Set();
                }
                graph[wordA[a]].add(wordB[b]);
            }
        }
        const inDegrees = {};
        for (let parent of Object.keys(graph)) {
            if (inDegrees[parent] === undefined) {
                inDegrees[parent] = 0;
            }
            for (let child of Array.from(graph[parent])) {
                if (inDegrees[child] === undefined) {
                    inDegrees[child] = 0;
                }
                inDegrees[child] += 1;
            }
        }
        const sources = new Queue();
        for (let vertex of Object.keys(inDegrees)) {
            if (inDegrees[vertex] === 0) {
                sources.enqueue(vertex);
            }
        }
        let result = "";
        while (sources.length !== 0) {
            const source = sources.dequeue();
            result += source;
            if (graph[source] !== undefined) {
                for (let child of Array.from(graph[source])) {
                    inDegrees[child] -= 1;
                    if (inDegrees[child] === 0) {
                        sources.enqueue(child);
                    }
                }
            }
        }
        return result.length === Object.keys(inDegrees).length ? result : "";
    }
}