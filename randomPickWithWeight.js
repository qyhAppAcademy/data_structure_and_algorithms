var Solution = function (w) {
    this.line = new Array(w.length);
    w.reduce((acc, ele, idx) => {
        acc += ele;
        this.line[idx] = acc;
        return acc;
    }, 0);
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    let start = 0;
    let end = this.line.length - 1;
    let randomNum = Math.random() * this.line[end];
    while (start < end) {
        let mid = Math.floor((start + end) / 2.0);
        if (randomNum < this.line[mid]) {
            end = mid;
        }
        else {
            start = mid + 1;
        }
    }
    return start;
};