/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.data = nestedList;
    this.stack = [];
    this.idx = 0;
    this.localIdx = 0;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    while (this.idx < this.data.length) {
        if (this.data[this.idx].isInteger()) {
            return true;
        }
        this.stack.push(this.data[this.idx]);
        while (this.stack.length > 0) {
            let top = this.stack[this.stack.length - 1].getList();
            console.log(top);
            console.log(top.length === 0);
            if (top.length === 0) {
                this.stack.pop();
            }
            else if (top[0].isInteger()) {
                return true;
            }
            else {
                let newTop = top.shift();
                this.stack.push(newTop);
            }
        }
        this.idx += 1;
    }
    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    if (this.data[this.idx].isInteger()) {
        let tmp = this.idx;
        this.idx += 1;
        return this.data[tmp].getInteger();
    }
    else {
        let top = this.stack[this.stack.length - 1].getList();
        let ele = top.shift();
        if (top.length === 0) {
            this.stack.pop();
        }
        if (this.stack.length === 0) {
            this.idx += 1;
        }
        return ele.getInteger();
    }
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/