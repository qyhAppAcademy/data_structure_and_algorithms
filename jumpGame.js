var canJump = function (nums) {
    if (nums.length <= 1) {
        return true;
    }
    return canJumpRec(nums, nums.length - 1);
};

const canJumpRec = (nums, currentIndex) => {
    if (currentIndex === 0) {
        return true;
    }
    for (let step = 1; step <= currentIndex; step++) {
        if (nums[currentIndex - step] >= step) {
            return canJumpRec(nums, currentIndex - step);
        }
    }
    return false;
}