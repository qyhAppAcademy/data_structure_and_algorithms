const getBalanced = (n) => {
    
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