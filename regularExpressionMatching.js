const isMatch = (s, p) => {
    let m = s.length;
    let n = p.length;
    if (m === 0) {
        return n === 0;
    }

    let dp = 
        new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));

    dp[0][0] = true;

    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === "*") {
            dp[0][j] = dp[0][j - 1];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === "." || s[i - 1] === p[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else if (p[j - 1] === "*") {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
            else {
                dp[i][j] = false
            }
        }
    }
    return dp[m][n];
}