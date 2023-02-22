var kthSmallest = function (root, k) {
    const array = [];
    toList(root, array);
    return array[k - 1];
};

const toList = (root, array) => {
    if (!root) {
        return;
    }
    toList(root.left, array);
    array.push(root.val);
    toList(root.right, array);
}