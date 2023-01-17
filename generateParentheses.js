const getBalanced = (n) => {
    if (n === 0) {
        return [""];
    }
    const result = [];
    for(let i = 0; i < n; i++) {
        const X = getBalanced(i);
        for (const x of X) {
            const Y = getBalanced(n - i - 1);
            for (const y of Y) {
                result.push("(" + x + ")" + y);
            }
        }
    }
    return result;
}

const table = [[""]];
const getBalancedMemoization = (n) => {
    if (n < table.length) {
        return table[n];
    }
    const result = [];
    for (let i = 0; i < n; i++) {
        const X = getBalancedMemoization(i);
        for (const x of X) {
            const Y = getBalancedMemoization(n - i - 1);
            for (const y of Y) {
                result.push("(" + x + ")" + y);
            }
        }
    }
    table.push(result);
    return table[n];
}

const genBalancedDP = (n) => {
    let dp = [[""]];
    for (let j = 1; j <= n; j++) {
        result = [];
        for (let i = 0; i < j; i++) {
            for (let x = 0; x < dp[i].length; x++) {
                for (let y = 0; y < dp[j - i - 1].length; y++) {
                    result.push("(" + dp[i][x] + ")" + dp[j - i - 1][y]);
                }
            }
        }
        dp.push(result);
    }
    return dp[n];
}