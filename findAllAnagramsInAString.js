var findAnagrams = function (s, p) {
    const pHash = {};
    const sHash = {};
    for (let i = 0; i < p.length; i++) {
        if (pHash[p[i]] === undefined) {
            pHash[p[i]] = 0;
        }
        pHash[p[i]] += 1;
        if (sHash[s[i]] === undefined) {
            sHash[s[i]] = 0;
        }
        sHash[s[i]] += 1;
    }
    const result = [];
    if (equal(pHash, sHash)) {
        result.push(0);
    }
    for (let i = p.length; i < s.length; i++) {
        let front = i - p.length;
        sHash[s[front]] -= 1;
        if (sHash[s[front]] === 0) {
            delete sHash[s[front]];
        }
        if (sHash[s[i]] === undefined) {
            sHash[s[i]] = 0;
        }
        sHash[s[i]] += 1;
        if (equal(pHash, sHash)) {
            result.push(front + 1);
        }
    }
    return result;
};

var equal = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let key of Object.keys(obj1)) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}