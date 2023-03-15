var canConstruct = function (ransomNote, magazine) {
    const hashMap = {};
    for (let i = 0; i < magazine.length; i++) {
        let c = magazine[i];
        if (hashMap[c] === undefined) {
            hashMap[c] = 0;
        }
        hashMap[c] += 1;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        let c = ransomNote[i];
        if (hashMap[c] === undefined) {
            return false;
        }
        hashMap[c] -= 1;
        if (hashMap[c] < 0) {
            return false;
        }
    }
    return true;
};