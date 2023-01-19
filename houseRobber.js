var rob = function (nums) {
    const dp = new Array(nums.length + 3).fill(0);
    for (let i = 3; i < dp.length; i++) {
        dp[i] = Math.max(
            dp[i - 1],
            dp[i - 2] + nums[i - 3],
            dp[i - 3] + nums[i - 3]
        );
    }
    return dp[nums.length + 2];
};