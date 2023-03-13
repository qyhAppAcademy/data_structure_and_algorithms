var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                j += 1;
                k -= 1;
                while (nums[j] === nums[j - 1]) {
                    j += 1;
                }
                while (nums[k] === nums[k + 1]) {
                    k -= 1;
                }
            }
            else if (nums[i] + nums[j] + nums[k] < 0) {
                j += 1;
            }
            else {
                k -= 1;
            }
        }
    }
    return result;
};