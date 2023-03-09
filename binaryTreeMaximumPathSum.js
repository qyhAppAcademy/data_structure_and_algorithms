var maxPathSum = function (root) {
    const [p, m] = helper(root);
    return m;
};