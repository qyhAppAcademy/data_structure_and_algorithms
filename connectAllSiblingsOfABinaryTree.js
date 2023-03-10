export function populateNextPointers(root) {
    // Write your code here
    if (!root) {
        return root;
    }
    let prev = undefined;
    const queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        if (prev === undefined) {
            prev = node;
        }
        else {
            prev.next = node;
            prev = prev.next;
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return root;
}