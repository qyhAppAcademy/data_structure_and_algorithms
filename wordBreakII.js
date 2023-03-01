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

var wordBreak = function (s, wordDict) {
    // const result = {};
    // helper(s, new Set(wordDict), result);
    // return result[s];
    const dp = new Array(s.length + 1);
    for (let j = 1; j <= s.length; j++) {
        let res = [];
        let i = j - 1;
        while (i >= 0) {
            const substr = s.substring(i, j);
            if (wordDict.includes(substr)) {
                if (i > 0 && dp[i]) {
                    for (let sentence of dp[i]) {
                        res.push(sentence + " " + substr);
                    }
                }
                else {
                    res.push(substr);
                }
            }
            i -= 1;
        }
        dp[j] = res;
    }
    return dp[s.length];
};