var minWindow = function (s, t) {
    const window = {};
    const tHash = {};
    for (let i = 0; i < t.length; i++) {
        tHash[t[i]] = tHash[t[i]] ? tHash[t[i]] + 1 : 1;
    }
    let start = 0;
    let end = 0;
    let count = 0;
    let minStart = 0;
    let minLength = s.length + 1;
    while (end < s.length) {
        console.log(start);
        console.log(end);
        window[s[end]] = window[s[end]] ? window[s[end]] + 1 : 1;
        if (s[end] in tHash && window[s[end]] === tHash[s[end]]) {
            count += 1;
            while (count === Object.keys(tHash).length) {
                if (end - start + 1 < minLength) {
                    minLength = end - start + 1;
                    minStart = start;
                }
                window[s[start]] -= 1;
                if (s[start] in tHash && window[s[start]] < tHash[s[start]]) {
                    count -= 1;
                }
                start += 1;
            }
        }
        end += 1;
    }
    return s.substring(minStart, minStart + minLength);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));