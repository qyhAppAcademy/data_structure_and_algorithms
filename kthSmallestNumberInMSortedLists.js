var kSmallestNumber = function (lists, k) {
    // storing the length of lists to use it in a loop later
    let listLength = lists.length,
        // declaring a min-heap to keep track of smallest elements
        minHeapforKSmallest = new MinHeap(),
        // to check if input lists are empty
        emptyList = [];

    for (let index = 0; index < listLength; index++) {
        // if there are no elements in the input lists, return []
        if (lists[index].length === 0) {
            continue
        }

        // placing the first element of each list in the min-heap
        else
            minHeapforKSmallest.offer([lists[index][0], 0, lists[index]]);
    }

    // set a counter to match if our kth element
    // equals to that counter, return that number
    let numbersChecked = 0,
        smallestNumber,
        index, topNumList;

    while (minHeapforKSmallest.size() > 0) {
        // iterating over the elements pushed in our min-heap
        // get the smallest number from top of heap and its corresponding list
        let result = minHeapforKSmallest.poll();
        [smallestNumber, index, topNumList] = result;

        numbersChecked += 1;

        if (numbersChecked == k)
            break;

        // if there are more elements in list of the top element,
        // add the next element of that list to the min-heap
        if (index + 1 < topNumList.length) {
            minHeapforKSmallest.offer([
                topNumList[index + 1],
                index + 1,
                topNumList,
            ]);
        }
    }

    // return the kth number found in input lists
    return smallestNumber == undefined ? 0 : smallestNumber;
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