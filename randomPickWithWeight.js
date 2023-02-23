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

};