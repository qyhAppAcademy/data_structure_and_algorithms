const rob = (nums) => {
    if (nums.length === 1) {
        return nums[0];
    }
    return Math.max(
        robLinear(0, nums.length - 2, nums),
        robLinear(1, nums.length - 1, nums)
    );
}

const robLinear = (left, right, nums) => {
    let included = 0;
    let excluded = 0;
    let temp = 0;
    for(let i = left; i <= right; i++) {
        temp = Math.max(included, excluded);
        included = excluded + nums[i];
        excluded = temp;
    }
    return Math.max(included, excluded);
}