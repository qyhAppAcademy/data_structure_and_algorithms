var MedianFinder = function () {
    this.smallHalf = new MinHeap();
    this.largeHalf = new MinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.smallHalf.size() === 0 || -1 * this.smallHalf.peek() >= num) {
        this.smallHalf.offer(- 1 * num);
    }
    else {
        this.largeHalf.offer(num);
    }
    if (this.smallHalf.size() > this.largeHalf.size() + 1) {
        this.largeHalf.offer(-1 * this.smallHalf.poll());
    }
    else if (this.smallHalf.size() < this.largeHalf.size()) {
        this.smallHalf.offer(-1 * this.largeHalf.poll());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.smallHalf.size() === this.largeHalf.size()) {
        return (-1 * this.smallHalf.peek()) / 2.0 + this.largeHalf.peek() / 2.0;
    }
    else {
        return -1 * (this.smallHalf.peek() / 1.0);
    }
};

var MedianFinder = function () {
    this.smallHalf = new MinHeap();
    this.largeHalf = new MinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.largeHalf.size() === 0 || this.largeHalf.peek() < num) {
        this.largeHalf.offer(num);
    }
    else {
        this.smallHalf.offer(-1 * num);
    }
    if (this.largeHalf.size() > this.smallHalf.size() + 1) {
        this.smallHalf.offer(-1 * this.largeHalf.poll());
    }
    else if (this.largeHalf.size() < this.smallHalf.size()) {
        this.largeHalf.offer(-1 * this.smallHalf.poll());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.largeHalf.size() === this.smallHalf.size()) {
        return (-1 * this.smallHalf.peek() + this.largeHalf.peek()) / 2.0;
    }
    else {
        return this.largeHalf.peek();
    }
};

class MinHeap {
    constructor(data = new Array()) {
        this.data = data;
        this.compareVal = (a, b) => a - b;
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