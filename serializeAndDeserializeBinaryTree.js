/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const result = [];
    serializeHelper(root, result);
    return result;
};

const serializeHelper = (root, result) => {
    if (!root) {
        result.push(null);
        return;
    }
    result.push(root.val);
    serializeHelper(root.left, result);
    serializeHelper(root.right, result);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data.length === 0) {
        return null;
    }
    return deserializeHelper(data);
};

// const deserializeHelper = (data) => {
//     if (data.length === 0) {
//         return null;
//     }
//     let datum = data.shift();
//     if (datum === null) {
//         return null;
//     }
//     const node = new TreeNode(datum);
//     node.left = deserializeHelper(data);
//     node.right = deserializeHelper(data);
//     return node;
// }

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */