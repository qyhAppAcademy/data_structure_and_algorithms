var diameterOfBinaryTree = function (root) {
    const d = [0];
    helper(root, d);
    return d[0];
};

const helper = (root, d) => {
    if (!root) {
        return 0;
    }
    let lh = helper(root.left, d);
    let rh = helper(root.right, d);
    d[0] = Math.max(d[0], lh + rh);
    return Math.max(lh, rh) + 1;
}