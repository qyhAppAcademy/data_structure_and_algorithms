var missingNumber = function (nums) {
    let idx = 0;
    while (idx < nums.length) {
        if (nums[idx] != idx && nums[idx] < nums.length) {
            let tmp = nums[nums[idx]];
            nums[nums[idx]] = nums[idx];
            nums[idx] = tmp;
        }
        else {
            idx += 1;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    return nums.length
};