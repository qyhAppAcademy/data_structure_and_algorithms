function word_pattern(pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) {
        return false;
    }
    console.log(pattern);
    console.log(words);
    const hashMap = {};
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];
        if (hashMap[char]) {
            if (hashMap[char] !== word) {
                return false;
            };
        }
        else {
            if (Object.values(hashMap).includes(word)) {
                return false;
            }
            else {
                hashMap[char] = word;
            }
        }
    }
    return true;
}