var FreqStack = function () {
    this.frequency = {};
    this.group = {};
    this.maxFrequency = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
    this.frequency[val] = this.frequency[val] === undefined ? 1 : this.frequency[val] + 1;
    if (this.group[this.frequency[val]] === undefined) {
        this.group[this.frequency[val]] = [];
    }
    this.group[this.frequency[val]].push(val);
    this.maxFrequency = Math.max(this.maxFrequency, this.frequency[val]);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    if (this.maxFrequency === 0) {
        return -1;
    }
    let val = this.group[this.maxFrequency].pop();
    this.frequency[val] -= 1;
    if (this.frequency[val] === 0) {
        delete this.frequency[val];
    }
    if (this.group[this.maxFrequency].length === 0) {
        this.maxFrequency -= 1;
    }
    return val;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */