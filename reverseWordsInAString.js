var reverseWords = function (s) {
    let newS = [];
    for (let word of s.trim().split(" ").map(word => word.trim())) {
        if (word !== "") {
            newS.push(word);
        }
    }
    let left = 0;
    let right = newS.length - 1;
    while (left < right) {
        let tmp = newS[left];
        newS[left] = newS[right];
        newS[right] = tmp;
        left += 1;
        right -= 1;
    }
    return newS.join(" ");
};