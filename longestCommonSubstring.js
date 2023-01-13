function LCSubstr(X, Y, m, n) {
    const LCSuff = 
        Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    let GCSubstr = "";
    let result = 0;

    for(let i = 0; i <= m; i++) {
        for(let j = 0; j <= n; j++) {
            if (i === 0 || j === 0)
                LCSuff[i][j] = 0;
            else if (X[i - 1] === Y[j - 1]) {
                LCSuff[i][j] = LCSuff[i-1][j-1] + 1;
                if (LCSuff[i][j] > result) {
                    result = LCSuff[i][j];
                    GCSubstr = X.substring(i - result, i);
                }
            }
            else {
                LCSuff[i][j] = 0;
            }
        }
    }

    return GCSubstr;
}

const answer = LCSubstr("zxabcdezy", "yzabcdezx", 9, 9);
console.log(answer);