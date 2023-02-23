var findClosestElements = function (arr, k, x) {
    if (arr.length === k) {
        return arr;
    }

    let low = 0;
    let high = arr.length - 1;
    let found = undefined;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2.0);
        if (arr[mid] === x) {
            found = mid;
            break;
        }
        else if (arr[mid] < x) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    found = found !== undefined ? found : high;

    let result = [];
    let count = 0;

    let left = found;
    let right = found + 1 < arr.length ? found + 1 : undefined;

    while (count < k && (left !== undefined || right !== undefined)) {
        let small;
        if (left !== undefined && right !== undefined) {
            small = Math.abs(arr[left] - x) <= Math.abs(arr[right] - x) ? left : right;
        }
        else {
            small = left !== undefined ? left : right;
        }
        if (small === left) {
            result.unshift(arr[left]);
            left = left - 1 >= 0 ? left - 1 : undefined;
            count += 1;
        }
        else {
            result.push(arr[right]);
            right = right + 1 < arr.length ? right + 1 : undefined;
            count += 1;
        }
    }

    return result;
};