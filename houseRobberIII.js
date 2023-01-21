var rob = function (root) {
    const res = robTree(root);
    return Math.max(res.current, res.next);
};

const robTree = (root) => {
    if (root === null) {
        return { current: 0, next: 0 };
    }
    const left = robTree(root.left);
    const right = robTree(root.right);
    const current = root.val + left.next + right.next;
    const next =
        Math.max(left.current, left.next) +
        Math.max(right.current, right.next);
    return { current, next };
}