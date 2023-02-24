var subsets = function (nums) {
    const size = 2 ** nums.length;
    const subsets = [];
    for (let i = 0; i < size; i++) {
        const subset = new Set();
        for (let j = 0; j < nums.length; j++) {
            const bit = getBit(i, j);
            if (bit === 1) {
                subset.add(nums[j]);
            }
        }
        subsets.push(Array.from(subset));
    }
    return subsets;
};

const getBit = (num, bit) => {
    let temp = 1 << bit;
    temp = temp & num;
    return temp === 0 ? 0 : 1;
}