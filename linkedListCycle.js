var hasCycle = function (head) {
    if (!head || !head.next) {
        return false;
    }
    let slow = head.next;
    let fast = slow.next;
    while (slow !== fast) {
        if (!fast) {
            return false;
        }
        slow = slow.next;
        fast = fast.next ? fast.next.next : null;
    }
    return true;
};