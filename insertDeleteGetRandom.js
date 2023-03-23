var RandomizedSet = function () {
    this.indexor = {}; // maps actual value to its index
    this.store = []; // store actual values in an array
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (val in this.indexor) {
        return false;
    }
    this.indexor[val] = this.store.length;
    this.store.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (val in this.indexor) {
        let last = this.store[this.store.length - 1],
            i = this.indexor[val];

        this.store[i] = last;
        this.indexor[last] = i;

        delete this.indexor[val];
        this.store.pop();
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.store[Math.floor(Math.random() * this.store.length)];
};