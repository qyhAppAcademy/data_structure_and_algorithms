var reverseBetween = function (head, left, right) {
    if (!head || !head.next | left === right) {
        return head;
    }
    let beforeLeft = left === 1 ? null : head;
    let count = 1;
    while (beforeLeft && count < left - 1) {
        beforeLeft = beforeLeft.next;
        count += 1;
    }

    let afterRight = right === 1 ? null : head;
    count = 1;
    while (afterRight && count <= right) {
        afterRight = afterRight.next;
        count += 1;
    }

    let reversedLeftToRight = reverseNodes(beforeLeft ? beforeLeft.next : head, left, right);
    let tmp = reversedLeftToRight;
    while (left < right) {
        tmp = tmp.next;
        left += 1;
    }
    tmp.next = afterRight;

    if (beforeLeft) {
        beforeLeft.next = reversedLeftToRight;
        return head;
    }
    else {
        return reversedLeftToRight;
    }
};

const reverseNodes = (head, left, right) => {
    if (!head || !head.next) {
        return null;
    }
    let previous = null;
    let current = head;
    while (left <= right) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        left += 1;
    }
    return previous;
}