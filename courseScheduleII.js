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

var findAllRecipes = function (recipes, ingredients, supplies) {
    const graph = {};
    const inDegrees = {};
    for (let i = 0; i < ingredients.length; i++) {
        let child = recipes[i];
        let ingredient = ingredients[i];
        for (let j = 0; j < ingredient.length; j++) {
            let parent = ingredient[j];
            if (graph[parent] === undefined) {
                graph[parent] = [];
            }
            graph[parent].push(child);

            if (inDegrees[child] === undefined) {
                inDegrees[child] = 0;
            }
            inDegrees[child] += 1;
        }
    }
    console.log(graph);
    console.log(inDegrees);
    const result = [];
    const sources = new Queue2();
    for (let vertex of supplies) {
        sources.enqueue(vertex);
    }
    while (sources.length !== 0) {
        const source = sources.dequeue();
        if (graph[source] !== undefined) {
            for (let child of graph[source]) {
                inDegrees[child] -= 1;
                if (inDegrees[child] === 0) {
                    sources.enqueue(child);
                    result.push(child);
                }
            }
        }
    }
    return result;
};