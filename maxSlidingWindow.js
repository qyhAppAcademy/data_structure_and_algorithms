var maxSlidingWindow = function (nums, k) {
    const result = [];
    let deque = [];
    for (let current = 0; current <= nums.length - k; current++) {
        while (deque.length > 0 && current > deque[0]) {
            deque.shift();
        }
        let start = Math.max(current, deque.length > 0 ? deque[deque.length - 1] + 1 : current);
        let end = current + k;
        for (; start < end; start++) {
            while (deque.length > 0 && nums[start] > nums[deque[deque.length - 1]]) {
                deque.pop();
            }
            deque.push(start);
        }
        result.push(nums[deque[0]]);
    }
    return result;
};