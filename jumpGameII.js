var jump = function (nums) {
    if (nums.length <= 1) {
        return 0;
    }
    let reached = false;
    let idx = 0;
    let steps = nums[0];
    let count = 0;
    while (!reached) {
        let range = 0;
        for (let i = idx + 1; i <= idx + steps; i++) {
            if (i === nums.length - 1) {
                reached = true;
                break;
            }
            range = Math.max(range, i + nums[i]);
        }
        idx += steps;
        steps = range - idx;
        count += 1;
    }
    return count;
};