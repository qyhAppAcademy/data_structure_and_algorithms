class MinHeap {
    constructor(data = new Array()) {
        this.data = data;
        this.compareVal = (a, b) => a < b ? -1 : 1;
        this.heapify();
    }

    heapify() {
        if (this.size() < 2) {
            return;
        }
        for (let i = 1; i < this.size(); i++) {
            this.percolateUp(i);
        }
    }

    peek() {
        if (this.size() === 0) {
            return null;
        }
        return this.data[0];
    }

    offer(value) {
        this.data.push(value);
        this.percolateUp(this.size() - 1);
    }

    poll() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.percolateDown(0);
        }
        return result;
    }

    percolateUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.compareVal(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    percolateDown(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;

            if (
                leftIndex <= lastIndex &&
                this.compareVal(this.data[leftIndex], this.data[findIndex]) < 0
            ) {
                findIndex = leftIndex;
            }

            if (
                rightIndex <= lastIndex &&
                this.compareVal(this.data[rightIndex], this.data[findIndex]) < 0
            ) {
                findIndex = rightIndex;
            }

            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }

    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [
            this.data[index2],
            this.data[index1],
        ];
    }

    size() {
        return this.data.length;
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
            while (a < wordA.length) {
                if (graph[wordA[a]] === undefined) {
                    graph[wordA[a]] = new Set();
                }
                a += 1;
            }
            while (b < wordB.length) {
                if (graph[wordB[b]] === undefined) {
                    graph[wordB[b]] = new Set();
                }
                b += 1;
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
        const sources = new MinHeap();
        for (let vertex of Object.keys(inDegrees)) {
            if (inDegrees[vertex] === 0) {
                sources.offer(vertex);
            }
        }
        let result = "";
        console.log('z' > 'y' ? "true" : "false");
        while (sources.size() > 0) {
            const source = sources.poll();
            result += source;
            // console.log(source);
            // console.log(sources.size());
            // console.log(Array.from(graph[source]));
            // console.log(inDegrees);
            if (graph[source] !== undefined) {
                for (let child of Array.from(graph[source])) {
                    inDegrees[child] -= 1;
                    if (inDegrees[child] === 0) {
                        sources.offer(child);
                    }
                }
            }
        }
        return result.length === Object.keys(inDegrees).length ? result : "";
    }
}