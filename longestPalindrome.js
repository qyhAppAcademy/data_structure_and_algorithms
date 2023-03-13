var longestPalindrome = function (s) {
    const hashMap = {};
    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]] === undefined) {
            hashMap[s[i]] = 0;
        }
        hashMap[s[i]] += 1;
    }
    let isOdd = false;
    let count = 0;
    for (let c of Object.keys(hashMap)) {
        if (hashMap[c] % 2 === 0) {
            count += hashMap[c];
        }
        else {
            count += hashMap[c] - 1;
            isOdd = true;
        }
    }
    return isOdd ? count + 1 : count;
};