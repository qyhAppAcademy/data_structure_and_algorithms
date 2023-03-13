var middleNode = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let slow = head.next;
    let fast = slow.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};