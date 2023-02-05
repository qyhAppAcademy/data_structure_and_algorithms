function can_jump(nums) {
    if (nums.length <= 1) {
        return true;
    }
    const current = nums[0];
    let temp = [];
    for (let i = 1; i <= current; i++) {
        for (let j = 0; j < i; j++) {
            temp.push(nums.shift());
        }
        if (can_jump(nums)) {
            return true;
        }
        while (temp.length > 0) {
            nums.unshift(temp.pop());
        }
    }
    return false;
}