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

const findCompilationOrder = (dependencies) => {
    let graph = {};
    let inDegrees = {};
    dependencies.forEach(dependency => {
        const parent = dependency[1];
        const child = dependency[0];
        if (graph[parent] === undefined) {
            graph[parent] = [];
        }
        graph[parent].push(child);
        if (inDegrees[parent] === undefined) {
            inDegrees[parent] = 0;
        }
        if (inDegrees[child] === undefined) {
            inDegrees[child] = 0;
        }
        inDegrees[child] += 1;
    });

    if (Object.keys(graph).length === 0) {
        return [];
    }

    let sources = new Queue();
    Object.keys(graph).forEach(vertex => {
        if (inDegrees[vertex] === 0) {
            sources.enqueue(vertex);
        }
    });

    let sortedOrder = [];
    while (sources.length !== 0) {
        let source = sources.dequeue();
        sortedOrder.push(source);
        if (graph[source] !== undefined) {
            for (let child of graph[source]) {
                inDegrees[child] -= 1;
                if (inDegrees[child] === 0) {
                    sources.enqueue(child);
                }
            }
        }
    }
    return sortedOrder;
}

const result = findCompilationOrder([["B", "A"], ["C", "A"], ["D", "C"], ["E", "D"], ["E", "B"]]);
console.log(result);