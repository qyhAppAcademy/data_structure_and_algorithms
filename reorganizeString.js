var reorganizeString = function (s) {
    const hashMap = {};
    const maxHeap = new MaxHeap();
    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]] === undefined) {
            hashMap[s[i]] = 1;
            maxHeap.offer(s[i]);
        }
        else {
            hashMap[s[i]] += 1;
        }
    }
    let result = "";
    let prev = undefined;
    while (maxHeap.size() > 0) {
        let current = maxHeap.poll();
        result += current;
        if (hashMap[current] - 1 === 0) {
            delete hashMap[current];
        }
        else {
            hashMap[current] -= 1;
        };
        if (prev) {
            maxHeap.offer(prev);
        }
        prev = hashMap[current] ? current : undefined;
    }
    return Object.values(hashMap).length === 0 ? result : "";
};

class MaxHeap {
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
            if (this.compareVal(this.data[index][0], this.data[parentIndex][0]) > 0) {
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
                this.compareVal(this.data[leftIndex][0], this.data[findIndex][0]) > 0
            ) {
                findIndex = leftIndex;
            }

            if (
                rightIndex <= lastIndex &&
                this.compareVal(this.data[rightIndex][0], this.data[findIndex][0]) >= 0
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

export default MaxHeap;