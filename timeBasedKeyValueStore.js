let keyTimeMap = {};
var TimeMap = function () {
    keyTimeMap = {};
};

TimeMap.prototype.set = function (key, value, timestamp) {
    // If the 'key' does not exist in dictionary.
    if (!(key in keyTimeMap)) {
        keyTimeMap[key] = Array();
    }

    // Store '(timestamp, value)' pair in 'key' bucket.
    keyTimeMap[key].push([timestamp, value]);
};


TimeMap.prototype.get = function (key, timestamp) {

};