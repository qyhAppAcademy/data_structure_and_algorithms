var lengthOfLongestSubstring = function (s) {
    const windowHash = {};
    let start = 0;
    let end = 0;
    let maxLength = 0;
    for (; end < s.length; end++) {
        if (s[end] in windowHash) {
            if (end - start > maxLength) {
                maxLength = end - start;
            }
            while (start <= windowHash[s[end]]) {
                delete windowHash[s[start]];
                start += 1;
            };
        }
        windowHash[s[end]] = end;
    }
    return Math.max(maxLength, end - start);
};