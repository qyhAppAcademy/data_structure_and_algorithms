var bitwiseComplement = function (num) {
    // If the value of num is 0, return 1
    if (num == 0) {
        return 1;
    }
    // Converting the value into its binary representation and
    // counting the number of bits required by this number
    let bitCount = Math.floor(Math.log2(num)) + 1

    // Computing the all bits set of the number
    let allBitsSet = Math.pow(2, bitCount) - 1

    // Flipping all bits of number by taking XOR with allBitsSet
    return num ^ allBitsSet
};