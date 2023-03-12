var fractionToDecimal = function (numerator, denominator) {
    const hashMap = {};
    let result = "";
    let q = Math.floor(numerator / denominator);
    let r = numerator % denominator;
    result += q.toString();
    if (r > 0) {
        result += ".";
        r *= 10;
        hashMap[r] = result.length;
    }
    while (r % denominator > 0) {
        q = Math.floor(r / denominator);
        r = r % denominator;
        result += q.toString();
        r *= 10;
        if (hashMap[r] === undefined) {
            hashMap[r] = result.length;
        }
        else {
            break;
        }
    }
    if (r === 0) {
        return result;
    }
    else if (r % denominator === 0) {
        result += Math.floor(r / denominator).toString();
        return result;
    }
    else {
        return result.substring(0, hashMap[r]) + "(" + result.substring(hashMap[r]) + ")";
    }
};