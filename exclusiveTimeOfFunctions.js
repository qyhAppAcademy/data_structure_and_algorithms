var exclusiveTime = function (n, logs) {
    const result = new Array(n).fill(0);
    const stack = [logs[0].split(":")];
    for (let i = 1; i < logs.length; i++) {
        let [id, status, time] = logs[i].split(":");
        let top = stack[stack.length - 1];
        if (top === undefined) {
            stack.push([id, status, time]);
            continue;
        }
        if (id === top[0]) {
            if (status === "end") {
                result[id] += time - top[2] + 1;
                stack.pop();
                if (stack[stack.length - 1] !== undefined) {
                    stack[stack.length - 1][2] = time;
                }
            }
            else {
                result[id] += time - top[2] - 1;
                stack[stack.length - 1][2] = time;
                stack.push([id, status, time]);
            }

        }
        else {
            result[top[0]] += time - top[2] - 1;
            stack[stack.length - 1][2] = time;
            stack.push([id, status, time]);
        }
    }
    return result;
};