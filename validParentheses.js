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



console.log(isValid("{{{}}}"));