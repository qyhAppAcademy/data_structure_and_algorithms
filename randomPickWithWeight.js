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
    let randomNum = Math.random() * this.line[this.line.length - 1];
    let start = 0;
    let end = this.length - 1;
    while (start < end) {
        let mid = Math.floor((start + end) / 2.0);
        if (randomNum <= this.line[mid]) {
            return mid;
        }
        else {
            start = mid;
        }
    }
    return this.line.length - 1;
};