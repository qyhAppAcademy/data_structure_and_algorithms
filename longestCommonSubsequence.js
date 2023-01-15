const longestCommonSubsequence = (text1, text2) => {
    let m = text1.length;
    let n = text2.length;
    
    const dp = 
        Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if(text1[i - 1] === text2[j - 2]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }
}