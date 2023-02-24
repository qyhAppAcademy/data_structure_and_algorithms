var subsets = function (nums) {
    const size = 2 ** nums.length;
};

const getBit = (num, bit) => {
    let temp = 1 << bit;
    temp = temp & num;
    return temp === 0 ? 0 : 1;
}