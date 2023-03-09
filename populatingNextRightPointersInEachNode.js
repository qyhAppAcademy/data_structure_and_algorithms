var connect = function (root) {
    if (!root) {
        return root;
    }
    let prev = null;
    let level = -1;
    const queue = [[root, 0]];
    while (queue.length > 0) {
        let [node, lvl] = queue.shift();
        if (lvl > level) {
            level += 1;
            prev = node;
        }
        else {
            prev.next = node;
            prev = prev.next;
        }
        if (node.left) {
            queue.push([node.left, lvl + 1]);
        }
        if (node.right) {
            queue.push([node.right, lvl + 1]);
        }
    }
    return root;
};