var flatten = function (root) {
    if (!root) {
        return [];
    }
    const result = [];
    const stack = [root];
    let itr = new TreeNode(0, null, root);
    while (stack.length > 0) {
        let top = stack.pop();
        if (top.right) {
            stack.push(top.right);
        }
        if (top.left) {
            stack.push(top.left);
        }
        itr.left = null;
        itr.right = top;
        itr = itr.right;
    }
};