var minRemoveToMakeValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if ("()".includes(s[i])) {
            if (s[stack[stack.length - 1]] === "(" && s[i] === ")") {
                stack.pop();
            }
            else {
                stack.push(i);
            }
        }
    }
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (stack[0] === i) {
            stack.shift();
        }
        else {
            result += s[i];
        }
    }
    return result;
};