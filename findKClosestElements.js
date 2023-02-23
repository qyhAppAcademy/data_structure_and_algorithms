var findClosestElements = function (arr, k, x) {
    if (arr.length === k) {
        return arr;
    }
    let low = 0;
    let high = arr.length - 1;
    while (low < high) {
        let mid = Math.floor((low + high) / 2.0);
        if (arr[mid] === x) {
            low = mid;
            break;
        }
        else if (arr[mid] < x) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    let left = low - 1;
    let right = low;
    let result = [];
    let count = 0;
    while (count < k) {
        if (left >= 0 && right < arr.length) {
            let small = Math.abs(arr[left] - x) <= Math.abs(arr[right] - x) ? left : right;
            if (small === left) {
                result.unshift(arr[left]);
                left -= 1;
                count += 1;
                if (count === k) {
                    break;
                }
                result.push(arr[right]);
                right += 1;
                count += 1;
            }
            else {
                result.push(arr[right]);
                right += 1;
                count += 1;
                if (count === k) {
                    break;
                }
                result.unshift(arr[left]);
                left -= 1;
                count += 1;
            }
        }
        else if (left >= 0) {
            result.unshift(arr[left]);
            left -= 1;
            count += 1;
        }
        else {
            result.push(arr[right]);
            right += 1;
            count += 1;
        }
    }
    return result;
};