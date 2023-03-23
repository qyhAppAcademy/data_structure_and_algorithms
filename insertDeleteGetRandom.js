var RandomizedSet = function () {
    this.indexor = {}; // maps actual value to its index
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
    //Removes a value from the data structure.
    //Returns True if it contained the specified element.

    if (val in this.indexor) {
        // swap the last element in the array with the element
        // to delete, update the location of the moved element
        // in its entry in the hash map

        let last = this.store[this.store.length - 1],
            i = this.indexor[val];

        this.store[i] = last;
        this.indexor[last] = i;
        // delete the last element
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