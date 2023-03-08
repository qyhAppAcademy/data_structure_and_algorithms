var diameterOfBinaryTree = function (root) {
    if (!root) {
        return 0;
    }
    let stack;
    let maxLeft = 0;
    if (root.left) {
        stack = [[root.left, 1]];
        while (stack.length > 0) {
            const [top, depth] = stack.pop();
            maxLeft = Math.max(maxLeft, depth);
            if (top.right) {
                stack.push([top.right, depth + 1]);
            }
            if (top.left) {
                stack.push([top.left, depth + 1]);
            }
        }
    }
    let maxRight = 0;
    if (root.right) {
        stack = [[root.right, 1]];
        while (stack.length > 0) {
            const [top, depth] = stack.pop();
            maxRight = Math.max(maxRight, depth);
            if (top.right) {
                stack.push([top.right, depth + 1]);
            }
            if (top.left) {
                stack.push([top.left, depth + 1]);
            }
        }
    }
    return maxLeft + maxRight;
};