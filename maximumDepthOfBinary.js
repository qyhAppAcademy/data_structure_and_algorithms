var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    let lm = maxDepth(root.left);
    let rm = maxDepth(root.right);
    return Math.max(lm, rm) + 1;
};