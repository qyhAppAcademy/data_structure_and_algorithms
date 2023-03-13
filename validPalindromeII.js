var validPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left <= right) {
        if (s[left] != s[right]) {
            break;
        }
        else {
            left += 1;
            right -= 1;
        }
    }
    let leftA = left + 1;
    let rightA = right;
    while (leftA <= rightA) {
        if (s[leftA] != s[rightA]) {
            break;
        }
        else {
            leftA += 1;
            rightA -= 1;
        }
    }
    if (leftA > rightA) {
        return true;
    }
    let leftB = left;
    let rightB = right - 1;
    while (leftB <= rightB) {
        if (s[leftB] != s[rightB]) {
            break;
        }
        else {
            leftB += 1;
            rightB -= 1;
        }
    }
    if (leftB > rightB) {
        return true;
    }
    return false;
};