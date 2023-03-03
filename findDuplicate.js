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

var findDuplicateFloyd = function (nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    slow = nums[0];
    fast = nums[fast];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};