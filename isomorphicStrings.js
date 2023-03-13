var isIsomorphic = function (s, t) {
    const hashMap1 = {};
    const hashMap2 = {};
    for (let i = 0; i < s.length; i++) {
        if (hashMap1[s[i]] === undefined && hashMap2[t[i]] === undefined) {
            hashMap1[s[i]] = t[i];
            hashMap2[t[i]] = s[i];
        }
        else {
            if (hashMap1[s[i]] !== t[i] || hashMap2[t[i]] !== s[i]) {
                return false;
            }
        }
    }
    return true;
};