var reorderList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let slow = head;
    let fast = head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let first = head;
    let second = slow;
    let reversedSecond = reverseNodes(second);
    while (reversedSecond && reversedSecond.next) {
        let firstNext = first.next;
        let reversedSecondNext = reversedSecond.next;
        first.next = reversedSecond;
        reversedSecond.next = firstNext;
        first = firstNext;
        reversedSecond = reversedSecondNext;
    }
    return head;
};

const reverseNodes = (head) => {
    let previous = null;
    let current = head;
    while (current) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}