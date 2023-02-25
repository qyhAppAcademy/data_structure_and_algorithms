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
    for (let step = nums[currentIndex - 1]; step > 0; step--) {
        if (canJumpRec(nums, currentIndex - step)) {
            return true;
        }
    }
    return false;
}