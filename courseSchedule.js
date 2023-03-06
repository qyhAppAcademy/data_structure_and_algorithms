class Queue2 {
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

var canFinish = function (numCourses, prerequisites) {
    if (prerequisites.length === 0) {
        return true;
    }
    const graph = {};
    const inDegrees = {};
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
        inDegrees[i] = 0;
    }
    for (let pre of prerequisites) {
        let parent = pre[1];
        let child = pre[0];
        graph[parent].push(child);
        inDegrees[child] += 1;
    }
    let count = 0;
    const sources = new Queue2();
    for (let vertex of Object.keys(inDegrees)) {
        if (inDegrees[vertex] === 0) {
            sources.enqueue(vertex);
        }
    }
    while (sources.length !== 0) {
        const source = sources.dequeue();
        count += 1;
        for (let child of graph[source]) {
            inDegrees[child] -= 1;
            if (inDegrees[child] === 0) {
                sources.enqueue(child);
            }
        }
    }
    return count === numCourses;
};