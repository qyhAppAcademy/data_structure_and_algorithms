var circularArrayLoop = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let direction = nums[i] > 0 ? true : false;
        let slow = nextStep(nums, i, direction);
        let fast = nextStep(nums, slow, direction);
        while (slow != null && fast !== null && slow !== fast) {
            slow = nextStep(nums, slow, direction);
            fast = nextStep(nums, fast, direction);
            if (fast !== null) {
                fast = nextStep(nums, fast, direction);
            }
        }
        if (slow != null && fast !== null && slow === fast) {
            return true;
        }
    }
    return false;
};

var nextStep = function (nums, currentIndex, direction) {
    let nextDirection = nums[currentIndex] > 0;
    if (nextDirection !== direction) {
        return null;
    }
    let nextIndex = mod(currentIndex + nums[currentIndex], nums.length);
    if (nextIndex === currentIndex) {
        return null;
    }
    return nextIndex;
}

var mod = function (n, m) {
    return ((n % m) + m) % m;
}