var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2.0);
        if (nums[mid] === target) {
            return true;
        }

        if (nums[start] === nums[end]) {
            end -= 1;
            continue;
        }

        if (nums[start] < nums[mid]) {
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        else {
            if (nums[end] < target || target < nums[mid] || target == nums[start]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
    }
    return false;
};