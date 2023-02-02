var reverseBetween = function (head, left, right) {
    if (!head) {
        return head;
    }
    let beforeLeft = head;
    let count = 1;
    while (beforeLeft && count < left) {
        beforeLeft = beforeLeft.next;
        count += 1;
    }

    let afterRight = head;
    count = 1;
    while (afterRight && count <= right) {
        afterRight = afterRight.next;
        count += 1;
    }

    let reversedLeftToRight = reverseNodes(beforeLeft.next, left, right);
    let tmp = reversedLeftToRight;
    while (left < right) {
        tmp = tmp.next;
        left += 1;
    }
    if(beforeLeft){
        beforeLeft.next = reversedLeftToRight;
    }
    tmp.next = afterRight;
    return head;
};

const reverseNodes = (head, left, right) => {
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