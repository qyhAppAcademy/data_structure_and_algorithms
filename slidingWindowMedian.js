var medianSlidingWindow = function (nums, k) {
    const smallHalf = new MinHeap();
    const largeHalf = new MinHeap();
    const outgoingNums = {};
    const medians = [];
    for (let i = 0; i < k; i++) {
        smallHalf.offer(-1 * nums[i]);
    }
    for (let i = 0; i < Math.floor(k / 2); i++) {
        largeHalf.offer(-1 * smallHalf.poll());
    }
    let balance = 0;
    for (let i = k; i < nums.length; i++) {
        if (k % 2 === 1) {
            medians.push(firstHalf.peek() * -1.0);
        }
        else {
            medians.push((firstHalf.peek() * -1.0 + secondHalf.peek() * 1.0) * 0.5);
        }
        let outgoingNum = nums[i - k];
        let incomingNum = nums[i];

        if (outgoingNum == smallHalf.peek() * -1.0 || outgoingNum == largeHalf.peek()) {

        }
        else {

        }
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