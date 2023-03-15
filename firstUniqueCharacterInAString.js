var firstUniqChar = function (s) {
    const hashMap = {};
    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]] === undefined) {
            hashMap[s[i]] = [];
        }
        hashMap[s[i]].push(i);
    }
    let min = undefined;
    for (let key of Object.keys(hashMap)) {
        if (hashMap[key].length === 1) {
            let idx = hashMap[key][0];
            min = min === undefined ? idx : Math.min(min, idx);
        }
    }
    return min === undefined ? -1 : min;
};