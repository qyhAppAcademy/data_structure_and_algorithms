var reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let reversedHead = head;
    let current = head.next;
    reversedHead.next = null;
    while (current) {
        const next = current.next;
        current.next = reversedHead;
        reversedHead = current;
        current = next;
    }
    return reversedHead;
};