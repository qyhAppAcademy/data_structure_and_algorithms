var RandomizedSet = function () {
    this.indexor = {}; 
    this.store = []; // store actual values in an array
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    //Inserts a value in the data structure.
    //Returns True if it did not already contain the specified element.

    if (val in this.indexor) {
        return false;
    }
    // insert actual value as a key and its index as a value
    this.indexor[val] = this.store.length;
    // append new value to array
    this.store.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {

};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
};