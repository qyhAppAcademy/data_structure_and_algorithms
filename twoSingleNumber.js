var singleNumber = function (arr) {
    let bitwiseSum = 0;

    for (let i = 0; i < arr.length; i++) {
        bitwiseSum ^= arr[i];
    }

    // the least significant bit can be found with number ^ (-number)
    let bitwiseMask = bitwiseSum & (-bitwiseSum);

    // divide into two groups of numbers, here we want the group with bit set
    // which results in one of the numbers we want due to the property X ^ X = 0
    let results = 0;

    for (let i = 0; i < arr.length; i++) {
        if (bitwiseMask & arr[i]) {
            results = results ^ arr[i];
        }
    }

    return [results, bitwiseSum ^ results];
};