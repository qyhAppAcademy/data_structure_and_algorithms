var reverseBits = function (n) {
    let reversed = n.toString(2);
    const padding = "0";
    reversed = padding.repeat(32 - reversed.length) + reversed;
    return parseInt(reversed.split('').reverse().join(''), 2);
};