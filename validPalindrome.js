var isPalindrome = function (s) {
    const str = processString(s);
    for (let i = 0; i <= Math.floor((str.length - 1) / 2); i++) {
        let j = str.length - 1 - i;
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
};

const processString = (s) => {
    const newStr = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < s.length; i++) {
        if (alphabet.includes(s[i].toLowerCase())) {
            newStr.push(s[i].toLowerCase());
        }
    }
    return newStr.join("");
};