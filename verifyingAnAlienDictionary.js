var isAlienSorted = function (words, order) {
    if (words.length === 1) {
        return true;
    }
    const hashMap = {};
    for (let i = 0; i < order.length; i++) {
        hashMap[order[i]] = i;
    }
    for (let i = 1; i < words.length; i++) {
        let wordA = words[i - 1];
        let wordB = words[i];
        let j = 0
        while (wordA[j] === wordB[j] && Math.min(wordA.length, wordB.length))
            if (wordA[j] !== wordB[j] && hashMap[wordA[j]] > hashMap[wordB[j]]) {
                return false;
            }
    }
    if (j === Math.min(wordA.length, wordB.length) && wordB.length < wordA.length) {
        return false;
    }
}
return true;
};