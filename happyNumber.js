var isHappy = function (n) {
    let slow = helper(n);
    let fast = helper(slow);
    if (fast === 1) {
        return true;
    }
    while (slow !== fast) {
        if (fast === 1) {
            return true;
        }
        slow = helper(slow);
        fast = helper(helper(fast));
    }
    return false;
};

var helper = function (n) {
    const nums = n.toString().split("");
    return nums.reduce((acc, ele) => {
        return acc + parseInt(ele) ** 2;
    }, 0);
}