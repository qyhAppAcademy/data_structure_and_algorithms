var circularArrayLoop = function (nums) {
    if (nums.length <= 1) {
        return false;
    }
    let len = nums.length;
    let slow = nums[0];
    let fast = mod(slow + nums[slow], len);
    while (slow < nums.length) {
        let newSlow = mod(slow + nums[slow], len);
        let newFast = mod(fast + nums[fast], len);
        if (slow === newSlow || fast === newFast) {
            slow += 1;
            slow = mod(slow + nums[slow], len);
            fast = mod(slow + nums[slow], len);
        }
        else {
            slow = newSlow;
            fast = mod(newFast + nums[newFast], len);
            if (slow === fast) {
                return true;
            }
        }
    }
    return false;
};

var mod = function (n, m) {
    return ((n % m) + m) % m;
}