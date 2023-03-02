var firstMissingPositive = function (nums) {
    let idx = 0;
    while (idx < nums.length) {
        while (nums[idx] - 1 !== idx && 0 <= nums[idx] - 1 && nums[idx] - 1 <= nums.length && nums[idx] !== nums[nums[idx] - 1]) {
            let tmp = nums[nums[idx] - 1];
            nums[nums[idx] - 1] = nums[idx];
            nums[idx] = tmp;
        }
        idx += 1;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - 1 !== i) {
            return i + 1;
        }
    }
    return nums.length + 1;
};