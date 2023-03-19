var findTheDifference = function (str1, str2) {
    let result = 0;
    let str1Length = str1.length;
    let str2Length = str2.length;

    for (let i = 0; i < str1Length; i++) {
        result = result ^ str1[i].charCodeAt(0)
    }

    for (let i = 0; i < str2Length; i++) {
        result = result ^ str2[i].charCodeAt(0)
    }

    return String.fromCharCode(result);
};