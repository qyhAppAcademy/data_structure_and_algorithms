var minRefuelStops = function (target, startFuel, stations) {
    const len = stations.length + 1;
    const dp = new Array(len);
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len);
        dp[i].fill(0);
    }
    let minJ = undefined;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                dp[i][j] = startFuel;
            }
            else {
                dp[i][j] = dp[i - 1][j];
                if (dp[i - 1][j - 1] >= stations[i - 1][0]) {
                    dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + stations[i - 1][1]);
                }
            }
            if (dp[i][j] >= target) {
                minJ = minJ === undefined ? j : Math.min(minJ, j);
            }
        }
    }
    console.log(dp);
    return minJ === undefined ? -1 : minJ;
};