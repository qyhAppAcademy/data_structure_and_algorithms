export var RequestLogger = function (timeLimit) {
    // TODO: Initialize your data structure here
    this.log = {}
    this.timeLimit = timeLimit;
};

// This function decides whether the message request should be accepted or rejected
RequestLogger.prototype.messageRequestDecision = function (timestamp, request) {
    // Write your code here
    if (this.log[request] === undefined) {
        this.log[request] = timestamp;
        return true;
    }
    else {
        if (timestamp < this.log[request] + this.timeLimit) {
            return false;
        }
        else {
            this.log[request] = timestamp;
            return true;
        }
    }
};