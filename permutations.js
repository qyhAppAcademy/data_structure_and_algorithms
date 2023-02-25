var permute = function (nums) {
    const result = [];
    permutation(nums, 0, result);
    return result;
};

const permutation = (nums, currentIndex, result) => {
    if (currentIndex === nums.length - 1) {
        const arr = [];
        for (let num of nums) {
            arr.push(num);
        }
        result.push(arr);
        return;
    }
    for (let i = currentIndex; i < nums.length; i++) {
        swapIndex(nums, currentIndex, i);
        permutation(nums, currentIndex + 1, result);
        swapIndex(nums, i, currentIndex);
    }
}

const swapIndex = (nums, i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}