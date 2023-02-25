var canJump = function (nums) {
    if (nums.length <= 1) {
        return true;
    }
    return canJumpRec(nums, nums.length - 2);
};

const canJumpRec = (nums, currentIndex) => {
    if (currentIndex === 0) {
        return true;
    }
    for (let step = 1; step <= nums[currentIndex]; step++) {
        if (canJumpRec(nums, currentIndex - step)) {
            return true;
        }
    }
    return false;
}