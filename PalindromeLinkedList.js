var isPalindrome = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let slow = head.next;
    let fast = head.next ? head.next.next : null;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let isEven = fast === null;
    let result = [];
    let start = head;
    while (start !== slow) {
        result.unshift(start.val);
        start = start.next;
    }
    if (!isEven) {
        start = start.next;
    }
    while (start !== null) {
        if (start.val === result[0]) {
            result.shift();
            start = start.next;
        }
        else {
            return false;
        }
    }
    return true;
};