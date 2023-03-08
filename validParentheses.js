// var isValid = function (s) {
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         if (!check("(", ")", 0, char) ||
//             !check("{", "}", 1, char) ||
//             !check("[", "]", 2, char)) {
//             return false;
//         }
//     }
//     return count.every(ele => ele === 0);
// };

// const count = [0, 0, 0];

// const check = (open, closed, idx, char) => {
//     if (char === open || char === closed) {
//         char === open ? count[idx] += 1 : count[idx] -= 1;
//         if (count[idx] < 0) {
//             return false;
//         }
//     }
//     return true;
// }

var isValid = function (s) {
    const stack = [];
    const open = ["(", "{", "["];
    const closed = [")", "}", "]"];
    for (let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            if (stack.length === 0 ||
                open.indexOf(stack[stack.length - 1]) <= open.indexOf(s[i])) {
                stack.push(s[i]);
            }
            else {
                return false;
            }
        }
        else {
            if (stack.length > 0 && open.indexOf(stack[stack.length - 1]) === closed.indexOf(s[i])) {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid("{{{}}}"));