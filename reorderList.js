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
};

const reverseNodes = (head) => {

}