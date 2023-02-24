var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2.0);
        if (nums[mid] === target) {
            return true;
        }

        if (nums[start] === nums[mid] && nums[mid] === nums[end]) {
            start += 1;
            end -= 1;
            continue;
        }

        if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        else {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
    return false;
};