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
            if (this.compareVal(this.data[index][0], this.data[parentIndex][0]) < 0) {
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
                this.compareVal(this.data[leftIndex][0], this.data[findIndex][0]) < 0
            ) {
                findIndex = leftIndex;
            }

            if (
                rightIndex <= lastIndex &&
                this.compareVal(this.data[rightIndex][0], this.data[findIndex][0]) < 0
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
     * @param intervals: an array of meeting time intervals
     * @return: the minimum number of conference rooms required
     */
    minMeetingRooms(intervals) {
        // Write your code here
        let minMeetings = 0;
        const meetings = new MinHeap();
        const intervalsHeap = new MinHeap(intervals.map(
            interval => [interval.start, interval.end]
        ));
        while (intervalsHeap.size() > 0) {
            let meeting = intervalsHeap.poll();
            let start = meeting[0];
            let end = meeting[1];
            if (meetings.size() > 0 && meetings.peek()[0] <= start) {
                meetings.offer([end, meetings.poll()[1]]);
            }
            else {
                minMeetings += 1;
                meetings.offer([end, minMeetings]);
            }
        }
        return minMeetings;
    }
}