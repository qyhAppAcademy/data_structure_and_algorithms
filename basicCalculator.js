var calculate = function (s) {
    let result = 0;
    let number = 0;
    let signValue = 1;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(parseInt(s[i]))) {
            number *= 10;
            number += parseInt(s[i]);
        }
        else if ("+-".includes(s[i])) {
            result += number * signValue;
            number = 0;
            signValue = s[i] === "+" ? 1 : -1;
        }
        else if (s[i] === "(") {
            stack.push(result);
            stack.push(signValue);
            result = 0;
            number = 0;
            signValue = 1;
        }
        else if (s[i] === ")") {
            result += number * signValue;
            let outsideSignValue = stack.pop();
            let outsideResult = stack.pop();
            result = outsideResult + result * outsideSignValue;
            number = 0;
            signValue = 1;
        }
    }
    return result + number * signValue;
};