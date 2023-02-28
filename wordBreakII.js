var wordBreak = function (s, wordDict) {
    const result = {};
    helper(s, new Set(wordDict), result);
    return result[s];
};

const helper = (s, dict, result) => {
    if (s.length === 0) {
        return [];
    }

    if (Object.keys(result).includes(s)) {
        return result[s];
    }

    const res = [];
    for (let word of dict.entries()) {
        word = word[0];

        if (!s.startsWith(word)) {
            continue;
        }

        if (word.length === s.length) {
            res.push(word);
            break;
        }
        else {
            const resultsOfSubstr = helper(s.substring(word.length), dict, result);
            for (let resultOfSubstr of resultsOfSubstr) {
                res.push(word + " " + resultOfSubstr);
            }
        }
    }
    result[s] = res;
    return res;
}