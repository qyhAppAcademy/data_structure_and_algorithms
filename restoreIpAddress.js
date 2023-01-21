var restoreIpAddresses = function (s) {
    const ans = [];
    backtrack(ans, [], s, 4);
    return ans;
};

const backtrack = (ans, ip, s, count) => {
    if (count === 0 && s.length === 0) {
        ans.push(ip.join("."));
        return;
    }
    for (let i = 1; i <= Math.min(3, s.length); i++) {
        let number = s.slice(0, i);
        if (parseInt(number) + "" === number &&
            parseInt(number) <= 255) {
            ip.push(number);
            backtrack(ans, ip, s.slice(i), count - 1);
            ip.pop();
        }
    }
}