var medianSlidingWindow = function (nums, k) {
    const smallHalf = new MinHeap();
    const largeHalf = new MinHeap();
    const outgoingNums = {};
    const medians = [];
    for (let i = 0; i < k; i++) {
        smallHalf.offer(nums[i] * -1);
    }
    for (let i = 0; i < Math.floor(k / 2); i++) {
        largeHalf.offer(smallHalf.poll() * -1);
    }
    for (let i = k; i < nums.length; i++) {
        if (k % 2 === 1) {
            medians.push(smallHalf.peek() * -1.0);
        }
        else {
            medians.push((smallHalf.peek() * -1.0 + largeHalf.peek() * 1.0) * 0.5);
        }
        let outgoingNum = nums[i - k];
        let incomingNum = nums[i];
        let balance = 0;
        if (outgoingNum <= smallHalf.peek() * -1) {
            balance -= 1;
        }
        else {
            balance += 1;
        }
        if (outgoingNum in outgoingNums) {
            outgoingNums[outgoingNum] += 1;
        }
        else {
            outgoingNums[outgoingNum] = 1;
        }
        if (smallHalf.size() > 0 && incomingNum <= smallHalf.peek() * -1) {
            smallHalf.offer(incomingNum * -1);
            balance += 1;
        }
        else {
            largeHalf.offer(incomingNum);
            balance -= 1;
        }
        if (balance < 0) {
            smallHalf.offer(largeHalf.poll() * -1);
            balance += 1;
        }
        if (balance > 0) {
            largeHalf.offer(smallHalf.poll() * -1);
            balance -= 1;
        }
        while (smallHalf.size() > 0 &&
            (smallHalf.peek() * -1) in outgoingNums &&
            outgoingNums[smallHalf.peek() * -1] > 0) {
            outgoingNums[smallHalf.poll() * -1] -= 1;
        }
        while (largeHalf.size() > 0 &&
            largeHalf.peek() in outgoingNums &&
            outgoingNums[largeHalf.peek()] > 0) {
            outgoingNums[largeHalf.poll()] -= 1;
        }
    }
    if (k % 2 === 1) {
        medians.push(smallHalf.peek() * -1.0);
    }
    else {
        medians.push((smallHalf.peek() * -1.0 + largeHalf.peek() * 1.0) * 0.5);
    }
    return medians;
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