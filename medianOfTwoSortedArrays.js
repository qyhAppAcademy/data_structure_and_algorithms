var findMedianSortedArrays = function (nums1, nums2) {
    const minHeap = new MinHeap();
    let m = nums1.length;
    let n = nums2.length;
    let p1 = 0;
    let p2 = 0;
    let count = 0;
    let k = (m + n) % 2 === 1 ? Math.ceil((m + n) / 2.0) : (m + n) / 2 + 1;
    while (p1 < m && p2 < n && count < k) {
        if (nums1[p1] <= nums2[p2]) {
            minHeap.offer([-1 * nums1[p1]]);
            p1 += 1;
        }
        else {
            minHeap.offer([-1 * nums2[p2]]);
            p2 += 1;
        }
        count += 1;
    }
    while (count < k) {
        if (p1 < m) {
            minHeap.offer([-1 * nums1[p1]]);
            p1 += 1;
        }
        if (p2 < n) {
            minHeap.offer([-1 * nums2[p2]]);
            p2 += 1;
        }
        count += 1;
    }
    console.log(minHeap);
    if ((m + n) % 2 === 1) {
        return minHeap.peek()[0] * -1.0;
    }
    else {
        return (minHeap.poll()[0] * -1.0 + minHeap.peek()[0] * -1.0) / 2.0;
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
            if (
                this.compareVal(
                    this.data[index][0],
                    this.data[parentIndex][0]
                ) < 0
            ) {
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
                this.compareVal(
                    this.data[leftIndex][0],
                    this.data[findIndex][0]
                ) < 0
            ) {
                findIndex = leftIndex;
            }

            if (
                rightIndex <= lastIndex &&
                this.compareVal(
                    this.data[rightIndex][0],
                    this.data[findIndex][0]
                ) < 0
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

findMedianSortedArrays();