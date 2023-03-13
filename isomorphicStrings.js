var isIsomorphic = function (s, t) {
    const hashMap = {};
    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]] === undefined) {
            hashMap[s[i]] = t[i];
        }
        else {
            if (hashMap[s[i]] !== t[i]) {
                return false;
            }
        }
    }
    return true;
};