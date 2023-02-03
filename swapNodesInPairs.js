var swapPairs = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let first = head;
    let previous = null;
    while (first && first.next) {
        let second = first.next;
        let next = second.next;
        second.next = first;
        first.next = next;
        if (previous) {
            previous.next = second;
        }
        else {
            head = second;
        }
        previous = first;
        first = next;
    }
    return head;
};