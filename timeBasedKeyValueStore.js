let keyTimeMap = {};
var TimeMap = function () {
};

TimeMap.prototype.set = function (key, value, timestamp) {
    // If the 'key' does not exist in dictionary.
    if (!(key in keyTimeMap)) {
        keyTimeMap[key] = {};
    }

    // Store '(timestamp, value)' pair in 'key' bucket.
    keyTimeMap[key][timestamp] = value;
};

TimeMap.prototype.get = function (key, timestamp) {

};