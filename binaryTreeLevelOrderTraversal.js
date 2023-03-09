var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    const result = [];
    let level = -1;
    const queue = [[root, 0]];
    while (queue.length > 0) {
        let [node, lvl] = queue.shift();
        if (lvl > level) {
            result.push([]);
            level += 1;
        }
        result[level].push(node.val);
        if (node.left) {
            queue.push([node.left, lvl + 1]);
        }
        if (node.right) {
            queue.push([node.right, lvl + 1]);
        }
    }
    return result;
};