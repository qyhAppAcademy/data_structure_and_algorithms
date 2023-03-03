var findDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] - 1 !== i && nums[i] !== nums[nums[i] - 1]) {
            let tmp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = tmp;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - 1 !== i) {
            return nums[i];
        }
    }
    return nums.length + 1;
};