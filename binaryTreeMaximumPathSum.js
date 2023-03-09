var maxPathSum = function (root) {
    const [p, m] = helper(root);
    return m;
};

const helper = (root) => {
    if (!root) {
        return [0, Number.NEGATIVE_INFINITY];
    }
    let [lp, lm] = helper(root.left);
    let [rp, rm] = helper(root.right);
    let p = Math.max(lp + root.val, rp + root.val, root.val);
    let m = Math.max(lm, rm, lp + rp + root.val, p, root.val);
    return [p, m];
}