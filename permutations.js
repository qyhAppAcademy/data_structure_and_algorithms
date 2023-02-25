var letterCombinations = function (digits) {
    if (digits.length === 0) {
        return [];
    }
    const letters = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const result = new Set();
    lc(letters, digits, [], 0, result);
    return Array.from(result);
};

const lc = (letters, digits, combo, currentIndex, result) => {
    if (currentIndex === digits.length) {
        result.add(combo.join(""));
        return result;
    }

    for (let index = currentIndex; index < digits.length; index++) {
        swapIndex(digits, currentIndex, index);

        let digit = parseInt(digits[currentIndex]);
        for (let i = 0; i < letters[digit].length; i++) {
            let letter = letters[digit][i];
            combo.push(letter);
            lc(letters, digits, combo, currentIndex + 1, result);
            combo.pop();
        }

        swapIndex(digits, currentIndex, index);
    }
}

const swapIndex = (digits, currentIndex, index) => {
    let temp = digits[currentIndex];
    digits[currentIndex] = digits[index];
    digits[index] = temp;
}