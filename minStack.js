class MainStack {
    constructor() {
        this.stackList = [];
    }

    isEmpty() {
        return this.stackList.length == 0;
    }

    top() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stackList[this.stackList.length - 1];
    }

    size() {
        return this.stackList.length;
    }

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stackList.pop();
    }
}

var MinStack = function () {
    this.minStack = new MainStack();
    this.mainStack = new MainStack();
};

MinStack.prototype.push = function (val) {
    let value = val;
    this.mainStack.push(value);

    // If the minStack is empty, or the value being pushed is less than
    // the minimum (top) value of minStack
    if (this.minStack.isEmpty() || value < this.minStack.top()) {
        // Push this new value to the minStack
        this.minStack.push(value);
    } else {
        // Keep the minimum value at the top of minStack
        this.minStack.push(this.minStack.top());
    }
};

MinStack.prototype.pop = function () {
    this.minStack.pop();
    // Returns the popped value from mainStack
    return this.mainStack.pop();
};

MinStack.prototype.top = function () {
    return this.mainStack.top();
};

MinStack.prototype.getMin = function () {
    if (this.minStack.isEmpty()) {
        return null;
    } else {
        return this.minStack.top();
    }
};