var circularArrayLoop = function (nums) {
    let len = nums.length;
    for (let i = 0; i < nums.length; i++) {
        let isPositive = nums[i] > 0 ? true : false;
        let slow = mod(i + nums[i], len);
        if (i === slow) {
            continue;
        }
        let fast;
        if (nums[slow] > 0 === isPositive) {
            fast = slow + nums[slow];
        }
        else {
            continue;
        }
        let found = true;
        while (slow !== fast) {
            if (nums[slow] > 0 === isPositive) {
                slow = mod(slow + nums[slow], len);
                if (i === slow) {
                    found = false;
                    break;
                }
                if (nums[fast] > 0 === isPositive) {
                    let tmp = mod(fast + nums[fast], len);
                    if (nums[tmp] > 0 === isPositive) {
                        fast = mod(tmp + nums[tmp], len);
                    }
                    else {
                        found = false;
                        break;
                    }
                }
                else {
                    found = false;
                    break;
                }
            }
            else {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
};

var mod = function (n, m) {
    return ((n % m) + m) % m;
}