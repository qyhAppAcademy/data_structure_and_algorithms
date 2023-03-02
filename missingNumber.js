var missingNumber = function (nums) {
    let idx = 0;
    while (idx < nums.length) {
        if (nums[idx] != idx) {
            let tmp = nums[nums[idx]];
            nums[nums[idx]] = nums[idx];
            nums[idx] = tmp;
            if (nums[idx] > nums.length - 1) {
                idx += 1;
            }
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